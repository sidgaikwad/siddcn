import { source, getPageContent } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { compileMDX } from "@fumadocs/mdx-remote";
import matter from "gray-matter";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const content = getPageContent(params.slug);
  if (!content) notFound();

  const { content: mdxContent } = matter(content);

  const compiled = await compileMDX({
    source: mdxContent,
    components: { ...defaultMdxComponents },
  });

  // 1. Assign to a Capitalized variable
  const Content = compiled.body;

  return (
    <DocsPage toc={compiled.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        {/* 2. Render as a component */}
        <Content />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
