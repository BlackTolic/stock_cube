import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 重定向redirects
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/dashboard", // 是传入的请求路径模式。
        destination: "/home", // 是您要路由到的路径。
        permanent: true, //  如果为 true，则将使用 308 状态码，该状态码指示客户端/搜索引擎永远缓存重定向，如果为 false，则将使用 307 状态码，该状态码是临时的，不会被缓存。
      },
      // Wildcard path matching
      {
        source: "/blog/:slug",
        destination: "/news/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
