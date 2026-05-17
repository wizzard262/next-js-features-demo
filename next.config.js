/* Central configuration file for Next.js.
Controls framework‑level behaviour such as static export, base paths, image handling, experimental flags, and build output settings. */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  /* Dynamic Next.js features are enabled because Azure App Service provides
     a full Node.js runtime. This allows middleware, SSR, API routes, and
     other server-side functionality to run normally. Leave this enabled
     when hosting on Azure or any platform with a runtime environment.
     (No specific setting needed — this comment explains why export is off.)

     `output: "export"` is used for static HTML export (GitHub Pages) only.
     Leave this disabled when hosting on Azure App Service,
     because dynamic Next.js features (middleware, SSR, API routes)
     require a runtime and will not work with `output: "export"`.
     Enable this again only if deploying to a static host like GitHub Pages,
     (but not all features will work in a static environment.) */
  // output: "export",
  
  /* other vars only used by Github Pages */
  // basePath: "/next-features", // repo name
  // assetPrefix: "/next-features/"// Ensures images, CSS, JS load correctly
};

module.exports = nextConfig;
