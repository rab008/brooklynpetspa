import type { MetadataRoute } from 'next'
import { routes } from '@/lib/routes'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brooklynpetspa.com'

  return routes
    .filter((route) => route.indexable)
    .map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.path === '/' ? 'weekly' : 'monthly',
      priority: route.path === '/' ? 1 : 0.8,
    }))
}
