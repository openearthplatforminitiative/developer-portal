import { createClient } from "next-sanity";

export type CustomButton = {
  text: string;
  url: string;
};

export interface Featured {
  _id: string;
  title: string;
  description: string;
  buttons: CustomButton[];
  promoted: boolean;
}

export interface Article {
  _id: string;
  _createAt: string;
  title: string;
  body: object[];
  slug: string;
  mainImage: string;
  description: string;
  publishedAt: string;
}

export interface ArticleObject {
  articles: Article[];
  total: number;
}

interface CodeBlock {
  code: string;
  language: string;
}

export interface Document {
  _id: string;
  title: string;
  slug: { current: string };
  parentSlug?: { current: string };
  parentTitle?: string;
  body: object[];
  code_examples: CodeBlock[];
}

export interface Partner {
  _id: string;
  title: string;
  url: string;
  description: string;
  partnerLogo: string;
}

export interface ResourceTutorial {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: string;
  body: object[];
}

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: false,
  apiVersion: "2025-05-22",
};

export const sanityClient = createClient(config);

export async function fetchResourceTutorialsByResourceNames(resourceNames: string[]): Promise<ResourceTutorial[]> {
  const query = `*[_type == "resource_tutorial" && resourceName in $resourceNames]{...}`;
  return sanityClient.fetch(query, { resourceNames })
}
export async function fetchResourceTutorialBySlug(slug: string): Promise<ResourceTutorial> {
  const query = `*[_type == "resource_tutorial" && slug.current == $slug][0]{...}`;
  return sanityClient.fetch(query, { slug })
}