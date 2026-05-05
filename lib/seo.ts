import type { Metadata } from 'next'

export type SEOConfig = {
  metaTitle: string
  metaDescription: string
  canonical: string
  noindex?: boolean
}

export function buildMetadata(config: SEOConfig): Metadata {
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: {
      canonical: config.canonical,
    },
    robots: {
      index: !(config.noindex ?? false),
      follow: !(config.noindex ?? false),
    },
  }
}
