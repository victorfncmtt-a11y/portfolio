import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-qk8msd2yf-victormaitto.vercel.app'
  const baseUrl = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
