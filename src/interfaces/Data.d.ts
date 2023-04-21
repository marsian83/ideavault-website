import { ChartData } from "chart.js";

export interface GlobalData {
  homepageCarouselImages: string[];
  testimonials: { name: string; content: string; imageUrl: string }[];
  faqs: { title: string; items: { title: string; content: string }[] }[];
  team: { name: string; imageUrl: string; position: string; link?: string }[];
  ideavaults: {
    id: number;
    imageUrl: string;
    name: string;
    subtitle: string;
    description: string;
    cagr: number;
    about: string[];
    minimum: number;
    performance: ChartData;
  }[];
}
