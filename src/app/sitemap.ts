import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.iflexiptv.pro';

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
    '/support'
  ];

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  } as MetadataRoute.Sitemap[0]));

  const dynamicBlogSitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  } as MetadataRoute.Sitemap[0]));

  return [...staticSitemap, ...dynamicBlogSitemap];
}
