export interface GlobalData {
  homepageCarouselImages: string[];
  testimonials: { name: string; content: string; imageUrl: string }[];
  faqs: { title: string; items: { title: string; content: string }[] }[];
  team: { name: string; imageUrl: string; position: string; link?: string }[];
}
