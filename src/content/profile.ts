import type { PortfolioProfile } from "@/types/portfolio";

const storyTemplates = [
  {
    title: "After Rain",
    location: "Chiang Mai, TH",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Still Water",
    location: "Setouchi, JP",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Field Notes",
    location: "North Sea, NL",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Open Ground",
    location: "Dolomites, IT",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Passing Light",
    location: "Paris, FR",
    imageUrl:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Soft Structure",
    location: "Rotterdam, NL",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Common Room",
    location: "Copenhagen, DK",
    imageUrl:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Desert Line",
    location: "Mojave, US",
    imageUrl:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Night Study",
    location: "Berlin, DE",
    imageUrl:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Quiet Form",
    location: "Seoul, KR",
    imageUrl:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=900&q=85"
  }
];

export const portfolioProfile: PortfolioProfile = {
  name: "Quietly shaping\ndigital stories.",
  role: "NATTAPONG",
  brandSuffix: ".dev",
  summary: "Keep going.",
  note: "Computer Engineering student",
  stories: Array.from({ length: 30 }, (_, position) => ({
    ...storyTemplates[position % storyTemplates.length],
    index: String(position + 1).padStart(2, "0")
  }))
};
