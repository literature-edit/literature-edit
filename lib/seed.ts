import clientPromise from "./mongodb";
import { pages } from "../data/site";
import crypto from "crypto";

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export async function seedDatabase() {
  try {
    const client = await clientPromise;
    const db = client.db("literature-edit");

    // 1. Seed pages collection
    const pagesCollection = db.collection("pages");
    const count = await pagesCollection.countDocuments();

    if (count === 0) {
      console.log("Seeding pages collection...");
      // Let's seed all default pages from data/site.ts
      await pagesCollection.insertMany(pages);

      // Let's also add a special page document for the Home page
      const homePage = {
        slug: "home",
        label: "Home",
        eyebrow: "Read Closely. Think Boldly. Write Authentically.",
        title: "LITERATURE EDIT",
        intro: "A literary studio dedicated to thoughtful teaching, editorial excellence, and academic mentorship. From IGCSE and IB classrooms to university applications and editorial projects, every interaction is rooted in curiosity, clarity, and craft.",
        image: "/hero-books.png",
        imageAlt: "Vintage books open on a wooden table, teacup, and dried flowers in front of a window with warm morning light",
        highlights: [
          {
            eyebrow: "Learn",
            title: "Explore Programmes",
            description: "Dedicated teaching for school English and university preparation."
          },
          {
            eyebrow: "Refine",
            title: "Editorial Services",
            description: "Line-by-line editorial craft that respects original voice."
          }
        ],
        closingTitle: "Read Closely. Think Boldly.",
        closingText: "Write Authentically."
      };
      await pagesCollection.insertOne(homePage);
      console.log("Pages collection seeded successfully!");
    } else {
      console.log("Pages collection already contains data.");
    }

    // 2. Seed admins collection
    const adminsCollection = db.collection("admins");
    const adminCount = await adminsCollection.countDocuments();

    if (adminCount === 0) {
      console.log("Seeding admin credentials...");
      const defaultPassword = "EE6GscABw9lvne4O";
      const hashedPassword = hashPassword(defaultPassword);
      
      await adminsCollection.insertOne({
        username: "admin",
        password: hashedPassword,
        createdAt: new Date()
      });
      console.log("Admin account created successfully! Username: admin");
    } else {
      console.log("Admin account already exists.");
    }

  } catch (error) {
    console.error("Seeding database failed:", error);
  }
}
