import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTemplate from "../../components/PageTemplate";
import { pageMap, pages } from "../../data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pages
    .filter(
      (page) =>
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
  const page = pageMap.get(slug);

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
  const page = pageMap.get(slug);

  if (!page) {
    notFound();
  }

  return <PageTemplate page={page} />;
}
