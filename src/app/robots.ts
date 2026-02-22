import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://cheapdigitalsubs.com";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/admin/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
