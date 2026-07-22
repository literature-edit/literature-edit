import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTemplate from "../../components/PageTemplate";
import { pages } from "../../data/site";
import { getPageData } from "../../lib/db-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pages
    .filter(
      (page) =>
        page.slug !== "home" &&
        page.slug !== "about" &&
        page.slug !== "programmes" &&
        page.slug !== "editorial-services" &&
        page.slug !== "resources" &&
        page.slug !== "journal" &&
        page.slug !== "contact"
    )
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageData(slug);

  if (!page) {
    return {
      title: "Literature Edit",
    };
  }

  return {
    title: `${page.label} | Literature Edit`,
    description: page.intro,
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageData(slug);

  if (!page) {
    notFound();
  }

  return <PageTemplate page={page} />;
}

