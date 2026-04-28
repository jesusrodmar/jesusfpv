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

function readPostsFromDir(dir: string): Post[] {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
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

const EMPEZAR_DIR = path.join(process.cwd(), "content", "empezar");

export function getAllPosts(): Post[] {
  return readPostsFromDir(EMPEZAR_DIR);
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(EMPEZAR_DIR, `${slug}.mdx`);
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

export function getGuiaPosts(subsection: string): Post[] {
  const dir = path.join(process.cwd(), "content", "guias", subsection);
  return readPostsFromDir(dir);
}

export function getGuiaPostBySlug(subsection: string, slug: string): Post | null {
  const filePath = path.join(process.cwd(), "content", "guias", subsection, `${slug}.mdx`);
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
