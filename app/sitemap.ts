import type { MetadataRoute } from "next"
import { execSync } from "child_process"

function getLastModified(filePath: string): Date {
  try {
    const timestamp = execSync(
      `git log -1 --format=%cI -- "${filePath}"`,
      { encoding: "utf-8" }
    ).trim()
    return timestamp ? new Date(timestamp) : new Date()
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://katyadesign.com.ar"

  return [
    {
      url: baseUrl,
      lastModified: getLastModified("app/page.tsx"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about/personal`,
      lastModified: getLastModified("app/about/personal/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/personal/study`,
      lastModified: getLastModified("app/about/personal/study/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about/personal/certificates`,
      lastModified: getLastModified("app/about/personal/certificates/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about/professional`,
      lastModified: getLastModified("app/about/professional/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: getLastModified("app/works/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: getLastModified("app/contact/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ]
}
