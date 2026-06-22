/** @type {import('next').NextConfig} */
const githubPagesBasePath = "/tiny-work-os-school";
const useGithubPagesBasePath =
  process.env.GITHUB_PAGES === "true" || process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github-pages";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: useGithubPagesBasePath ? githubPagesBasePath : undefined,
  assetPrefix: useGithubPagesBasePath ? githubPagesBasePath + "/" : undefined
};

export default nextConfig;
