import { host } from "./sitemap";

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${host}sitemap.xml`,
  }
}