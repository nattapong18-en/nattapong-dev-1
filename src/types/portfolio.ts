export type StoryPanel = {
  index: string;
  title: string;
  location: string;
  imageUrl: string;
};

export type PortfolioProfile = {
  name: string;
  role: string;
  brandSuffix: string;
  summary: string;
  note: string;
  stories: StoryPanel[];
};
