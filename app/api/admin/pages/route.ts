import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import clientPromise from "@/lib/mongodb";
import { verifySessionToken } from "@/lib/auth";

async function checkAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return false;
  return !!verifySessionToken(session);
}

import { pages as staticPages } from "@/data/site";

export async function GET(request: Request) {
  try {
    const isAuth = await checkAuth();
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const client = await clientPromise;
    const db = client.db("literature-edit");
    const pagesCollection = db.collection("pages");

    if (slug) {
      const page = await pagesCollection.findOne({ slug });
      const staticMatch = staticPages.find((p) => p.slug === slug);
      if (!page && !staticMatch) {
        return NextResponse.json({ error: "Page not found" }, { status: 404 });
      }
      if (page) {
        const { _id, ...rest } = page;
        return NextResponse.json({ ...staticMatch, ...rest });
      }
      return NextResponse.json(staticMatch);
    }

    const dbPages = await pagesCollection.find({}).toArray();
    const dbPagesMap = new Map(dbPages.map((p) => [p.slug, p]));

    const combinedPages = staticPages.map((sp) => {
      const dbP = dbPagesMap.get(sp.slug);
      if (dbP) {
        const { _id, ...rest } = dbP;
        return { ...sp, ...rest };
      }
      return sp;
    });

    for (const dbP of dbPages) {
      if (!staticPages.some((sp) => sp.slug === dbP.slug)) {
        const { _id, ...rest } = dbP;
        combinedPages.push(rest as any);
      }
    }

    return NextResponse.json(combinedPages);
  } catch (error: any) {
    console.error("GET Pages Error:", error);
    return NextResponse.json({ error: error?.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const isAuth = await checkAuth();
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { slug, _id, ...updateDoc } = body;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("literature-edit");
    const pagesCollection = db.collection("pages");

    const result = await pagesCollection.updateOne(
      { slug },
      { $set: updateDoc },
      { upsert: true }
    );

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("PUT Page Error:", error);
    return NextResponse.json({ error: error?.message || "Internal Server Error" }, { status: 500 });
  }
}
