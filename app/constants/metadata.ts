/**
 * Central configuration for your site's SEO metadata, analytics, and external links.
 * Customize these values with your own details.
 */
export const SITE_METADATA = {
  // Your website's absolute URL (used for SEO & canonical URLs)
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-qk8msd2yf-victormaitto.vercel.app/',

  // The title that appears on browser tabs and in search engine results
  title: "Victor Maitto ✌️ - Brand & Content Strategist",

  // A brief bio or description of what you do
  description: "Brand & Content Strategist and Brand Designer. Designing high-impact content engines, B2B SaaS positioning, and visual systems.",

  // Keywords to help search engines index your site
  keywords: "Victor Maitto, Brand Strategist, Content Strategist, Brand Designer, Creative Director, Marketing Agent, Napoli Centenary study, SKAL branding, Ações Afirmativas PUCPR, 25S surf fashion, Behance, Portfolio, Next.js, React, Three.js",

  // Author & publisher settings
  authorName: "Victor Maitto",
  creatorName: "Victor Maitto",
  publisherName: "Victor Maitto",

  // OpenGraph details (for social sharing on platforms like LinkedIn, Discord, etc.)
  openGraph: {
    title: "Victor Maitto - Brand & Content Strategist",
    description: "Brand & Content Strategist and Brand Designer. Designing high-impact content engines and positioning systems.",
    siteName: "Victor Maitto's Portfolio",
    locale: "en_US",
    type: "website",
  },

  // Twitter/X card details
  twitter: {
    title: "Victor Maitto - Brand & Content Strategist",
    description: "Brand & Content Strategist and Brand Designer. Designing high-impact content engines and positioning systems.",
  },

  // Google Site Verification code (for Google Search Console)
  // Set to empty string "" or null if you don't use it
  googleVerificationCode: "",

  // Google Analytics ID (can also be set via process.env.NEXT_PUBLIC_GA_ID)
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',

  // Awwwards badge URL. 
  // Set to empty string "" or null to completely remove the Awwwards floating badge.
  awwwardsUrl: "", // Example: "https://www.awwwards.com/sites/your-site-url"
};
