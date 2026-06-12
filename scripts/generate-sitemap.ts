// Generates public/sitemap.xml from the full SEO data layer.
// Runs as predev + prebuild via package.json scripts.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { enumerateAllUrls, SITE_URL } from "../src/lib/seo/slugs";

const entries = enumerateAllUrls();

function urlsXml() {
  return entries
    .map((e) => {
      const lines = [
        `  <url>`,
        `    <loc>${SITE_URL}${e.path}</loc>`,
        e.changefreq && `    <changefreq>${e.changefreq}</changefreq>`,
        e.priority && `    <priority>${e.priority}</priority>`,
        `  </url>`,
      ].filter(Boolean);
      return lines.join("\n");
    })
    .join("\n");
}

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  urlsXml(),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} URLs)`);
