import fs from "fs";
import { pianos } from "../src/data/pianos.ts";

const today = new Date().toISOString().split("T")[0];

const staticPages = [
  "/",
  "/pianos",
  "/about",
  "/blog",
  "/privacy-policy",
  "/terms",
  "/shipping",
  "/returns",
];

const urls = [
  ...staticPages.map(
    (page) => `
  <url>
    <loc>https://www.affordablepianos.com.au${page}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  ),

  ...pianos.map(
    (piano) => `
  <url>
    <loc>https://www.affordablepianos.com.au/pianos/${piano.slug}</loc>
    <lastmod>${today}</lastmod>

    <image:image>
      <image:loc>${piano.image}</image:loc>
    </image:image>

  </url>`
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log("✅ sitemap generated");