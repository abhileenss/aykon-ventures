export type Post = {
  slug: string;
  title: string;
  eyebrow: string;
  author: string;
  date: string;
  readMinutes: number;
  excerpt: string;
  body: string[];
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "a-word-from-the-founder",
    title: "A word from the founder.",
    eyebrow: "From the Desk",
    author: "Prachi Vishesh Manghnani",
    date: "June 2026",
    readMinutes: 3,
    featured: true,
    excerpt:
      "We do not do loud at Aykon. We do considered. A note on what we are building, and why we are building it slowly.",
    body: [
      "Welcome to the Aykon family.",
      "There is something quietly significant about beginning. Not a launch, not a reveal — just a beginning. We do not do loud at Aykon. We do considered.",
      "I have spent eighteen years planning real estate investments for private individuals and consortiums across Dubai, Hyderabad, and beyond. Before that, twenty-five years of building experiences — learning that the things worth remembering are never the ones built in haste.",
      "Aykon Ventures was built from that same conviction. We are a Dubai-based marketing and holding house operating across three disciplines: real estate, fine jewels, and considered spaces. We do not pitch. We do not chase mandates. We invest before we recommend — with capital and time on the line — and we put our name on only the things we are prepared to stand behind.",
      "We back what we sell.",
      "The Dispatch is where that thinking lives. Short notes from the house — on the markets we watch, the pieces we commission, the spaces we believe in, and occasionally, the quieter observations that don't belong anywhere else. Not a newsletter in the promotional sense. More like a letter from a desk that has been watching for a long time.",
      "We are just beginning. There is a great deal ahead — properties we will speak about before they are announced, stones being set as I write this, spaces in design that will be worth waiting for.",
      "Stay tuned. Stay close.",
    ],
    // Postscript rendered separately in the UI
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): Post | undefined {
  return posts.find((p) => p.featured) ?? posts[0];
}
