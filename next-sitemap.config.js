/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // TODO: replace with the real live domain before launch
  siteUrl: process.env.SITE_URL || "https://www.globaltradinghouseusa.com",
  generateRobotsTxt: true,
  outDir: "./out",
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
};
