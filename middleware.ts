import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 你可以基于传入的请求，重写、重定向、修改请求或响应头、甚至直接响应内容。
 * 一个比较常见的应用就是鉴权，在打开页面渲染具体的内容前，先判断用户是否登录，如果未登录，则跳转到登录页面。
 */

/** 匹配路径
 *中间件将被调用以处理 **项目中的每个路由**。鉴于此，使用匹配器来精确地定位或排除特定路由至关重要。以下是执行顺序:
 *来自 next.config.js 的 headers
 *来自 next.config.js 的 redirects
 *中间件（rewrites、redirects 等）
 *来自 next.config.js 的 beforeFiles（rewrites）
 *文件系统路由（public/、_next/static/、pages/、app/ 等）
 *来自 next.config.js 的 afterFiles（rewrites）
 *动态路由（/blog/[slug]）
 *来自 next.config.js 的 fallback (rewrites)
 *有两种方法可以定义中间件将在哪些路径上运行
 **/

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("nextjs");
  const allCookies = request.cookies.getAll();

  if (request.nextUrl.pathname.startsWith("/aboutxxx")) {
    console.log("执行了中间件");
    console.log(request.nextUrl.href, "request");
    return NextResponse.rewrite(new URL("/about-2", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }

  const response = NextResponse.next();
  // 修改cookie
  response.cookies.set("vercel", "fast");
  cookie = response.cookies.get("vercel");
  console.log(cookie, "cookie");
  return response;
}

// 设置匹配路径（以下匹配到的地址均会进入到中间件的逻辑中）
export const config = {
  // 匹配器支持missing 或 has 数组；正则匹配
  matcher: [
    // "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    "/about",
  ],
};
