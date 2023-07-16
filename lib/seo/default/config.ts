import { DefaultSeoProps } from "next-seo";

const NEXT_SEO_CONFIG = {
  titleTemplate: "%s - Vincent Suryakim",
  defaultTitle: "Vincent Suryakim",
  description: "Vincent's Portfolio",
  canonical: `https://www.vincentsuryakim.com`,
  openGraph: {
    type: "website",
    title: "Vincent Suryakim",
    images: [
      {
        url: "/og-image.jpg",
        width: 640,
        height: 640,
        alt: "vincent-suryakim-logo",
      },
    ],
    url: "https://www.vincentsuryakim.com",
    locale: "en_US",
    site_name: "Vincent Suryakim",
    twitter: {
        cardType: "summary",
    },
  },
} as DefaultSeoProps;

export default NEXT_SEO_CONFIG;