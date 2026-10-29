import { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [{ url: "https://amirzeb.dev/", lastModified: "2026-10-29" }];
}