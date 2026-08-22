import type { NextConfig } from "next";

// GitHub Pages serves project sites under a subpath (e.g. /<repo-name>).
// Set NEXT_PUBLIC_BASE_PATH to that subpath at build time; leave unset for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages — no server features (API routes, ISR, middleware).
  output: "export",
  // Emit /about/ -> /about/index.html so GitHub Pages resolves routes without a custom server.
  trailingSlash: true,
  // Required with output: 'export' — there is no image-optimization server.
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
