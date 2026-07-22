import clientPromise from "./mongodb";
import { pageMap } from "../data/site";

export async function getPageData(slug: string) {
  const staticPage = pageMap.get(slug);
  const staticData = staticPage ? JSON.parse(JSON.stringify(staticPage)) : null;

  try {
    const client = await clientPromise;
    const db = client.db("literature-edit");
    const page = await db.collection("pages").findOne({ slug });
    
    if (page) {
      // Serialize MongoDB _id to avoid Next.js serialization warnings
      const { _id, ...rest } = page;
      return {
        ...staticData,
        ...rest,
        // Deep copy highlights to plain objects if present
        highlights: page.highlights ? JSON.parse(JSON.stringify(page.highlights)) : (staticData?.highlights || []),
      };
    }
  } catch (error) {
    console.error(`Error fetching page ${slug} from MongoDB:`, error);
  }
  
  // Fallback to static data
  return staticData;
}
