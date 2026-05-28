import { isSupabaseConfigured, supabase } from "./supabase";

const FALLBACK_IMAGE = "/children.webp";

function formatPostDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function normalizeContent(content) {
  if (Array.isArray(content)) {
    return content.filter(Boolean);
  }

  if (typeof content === "string") {
    return content
      .split(/\r?\n\s*\r?\n/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  }

  return [];
}

export function generateSlug(title) {
  if (!title) return '';
  return title
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function mapPostRecord(record) {
  const description = record.description ?? "";
  const content = normalizeContent(record.content);

  return {
    id: record.id,
    slug: generateSlug(record.title),
    title: record.title,
    description,
    image: record.image_url || FALLBACK_IMAGE,
    author: record.author ?? "Unknown author",
    category: record.category ?? "",
    readTime: record.read_time ?? "",
    date: formatPostDate(record.published_at ?? record.created_at),
    content: content.length > 0 ? content : (description ? [description] : []),
  };
}

export async function fetchPublishedPosts() {
  if (!isSupabaseConfigured || !supabase) {
    return {
      data: [],
      error: null,
      configured: false,
    };
  }

  const { data, error } = await supabase
    .from("posts")
    .select(
      "id, title, description, image_url, author, category, read_time, content, published_at, created_at"
    )
    .eq("published", true)
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  return {
    data: (data ?? []).map(mapPostRecord),
    error,
    configured: true,
  };
}

export async function fetchRecentPublishedPosts(limit = 4, excludeId) {
  if (!isSupabaseConfigured || !supabase) {
    return {
      data: [],
      error: null,
      configured: false,
    };
  }

  let query = supabase
    .from("posts")
    .select(
      "id, title, description, image_url, author, category, read_time, content, published_at, created_at"
    )
    .eq("published", true)
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false })
    .limit(limit + (excludeId ? 1 : 0));

  if (excludeId) {
    query = query.neq("id", excludeId);
  }

  const { data, error } = await query;

  return {
    data: (data ?? []).map(mapPostRecord).slice(0, limit),
    error,
    configured: true,
  };
}

export async function fetchPublishedPostById(idOrSlug) {
  if (!isSupabaseConfigured || !supabase) {
    return {
      data: null,
      error: null,
      configured: false,
    };
  }

  const numericId = Number(idOrSlug);

  // If it's a numeric ID, fetch by ID
  if (!Number.isNaN(numericId)) {
    const { data, error } = await supabase
      .from("posts")
      .select(
        "id, title, description, image_url, author, category, read_time, content, published_at, created_at"
      )
      .eq("id", numericId)
      .eq("published", true)
      .maybeSingle();

    return {
      data: data ? mapPostRecord(data) : null,
      error,
      configured: true,
    };
  }

  // If it's a slug, we fetch all posts and match by slug
  const { data, error } = await supabase
    .from("posts")
    .select(
      "id, title, description, image_url, author, category, read_time, content, published_at, created_at"
    )
    .eq("published", true);

  if (error || !data) {
    return {
      data: null,
      error,
      configured: true,
    };
  }

  const mappedData = data.map(mapPostRecord);
  const post = mappedData.find(p => p.slug === idOrSlug);

  return {
    data: post || null,
    error: null,
    configured: true,
  };
}

