/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://example.com", // Ganti dengan URL situs Anda yang sebenarnya
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "/studio/" }],
  },
};

module.exports = config;
