import type { DefaultSeoProps } from 'next-seo'

export const baseUrl =
  process.env.NODE_ENV === "production" ? "https://boringstonks.live" : "";

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | BoringStonks',
  defaultTitle: 'BoringStonks',
  description:
    'BoringStonks is a technical blog about software development, programming, and other things.',
  canonical: 'https://boringstonks.live/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://boringstonks.live/',
    site_name: 'BoringStonks',
    images: [
      {
        url: `${baseUrl}/images/og-cover.png`,
        alt: "bs",
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@zaidmukaddam',
    handle: '@zaidmukaddam'
  }
}

export default SEO
