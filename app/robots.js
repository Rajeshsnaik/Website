export default function robots() {
    return {
        rules: [{
            userAgent: "*",
            allow: "/",
        }, ],
        sitemap: "https://your-domain.com/sitemap.xml",
        host: "https://your-domain.com",
    };
}