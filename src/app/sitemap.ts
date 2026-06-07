import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { absoluteUrl } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdated = new Date('2026-06-07');

  const staticRoutes = [
    '',
    '/pricing',
    '/features',
    '/channels',
    '/devices',
    '/faq',
    '/contact',
    '/blog',
    '/guides',
    '/support',
    '/terms',
    '/privacy',
    '/refund-policy',
    '/disclaimer'
  ];

  const staticSitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route || '/'),
    lastModified: siteUpdated,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  } as MetadataRoute.Sitemap[0]));

  const dynamicBlogSitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  } as MetadataRoute.Sitemap[0]));

  return [...staticSitemap, ...dynamicBlogSitemap];
}
