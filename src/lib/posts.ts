export const MAX_POST_LENGTH = 280;
export const PAGE_SIZE = 30;

export type Post = {
  id: string;
  body: string;
  created_at: string;
};

// Count Unicode code points, matching PostgreSQL char_length (including emoji).
export function characterCount(value: string): number {
  return Array.from(value).length;
}

export function validateMessage(value: string): string | null {
  if (!value.trim()) return "Write a message before sharing.";
  if (characterCount(value) > MAX_POST_LENGTH) return "Keep your message within 280 characters.";
  return null;
}

export function mergePosts(current: Post[], incoming: Post[]): Post[] {
  const unique = new Map(current.map((post) => [post.id, post]));
  for (const post of incoming) unique.set(post.id, post);
  return [...unique.values()].sort(
    (a, b) => b.created_at.localeCompare(a.created_at) || b.id.localeCompare(a.id),
  );
}
