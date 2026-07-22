import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  // Static export for GitHub Pages hosting (no Next.js server).
  output: "export",
  // Image optimization requires a server; disable it so images are
  // served as-is and resized by the browser. Quality is unaffected.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  // Trailing slashes produce /path/index.html, which GitHub Pages
  // serves reliably for deep links.
  trailingSlash: true,
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
