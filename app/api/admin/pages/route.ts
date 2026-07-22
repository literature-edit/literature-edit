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
      if (!page) {
        return NextResponse.json({ error: "Page not found" }, { status: 404 });
      }
      return NextResponse.json(page);
    }

    const pages = await pagesCollection.find({}).toArray();
    return NextResponse.json(pages);
  } catch (error: any) {
    console.error("GET Pages Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
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
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
