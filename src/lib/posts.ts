import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  affiliateLinks: boolean;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "",
        tags: data.tags ?? [],
        readTime: data.readTime ?? "5 min",
        affiliateLinks: data.affiliateLinks ?? false,
        content,
      } as Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    category: data.category ?? "",
    tags: data.tags ?? [],
    readTime: data.readTime ?? "5 min",
    affiliateLinks: data.affiliateLinks ?? false,
    content,
  };
}
