/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Your website URL (important: must be correct and HTTPS if live)
  siteUrl: "https://resumate-henna.vercel.app",

  // Generate robots.txt automatically
  generateRobotsTxt: true,

  // Optional: configure crawling policies
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all bots to crawl all pages
    ],
  },

  // If you later add dynamic routes or multiple sitemaps, you can add here:
  // additionalSitemaps: [
  //   'https://resumate-henna.vercel.app/server-sitemap.xml',
  // ],
};
