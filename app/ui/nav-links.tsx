"use client";

/**
在 Next.js 中，有四种方法可以在路由之间导航。
- 使用  <Link>  组件 (主推)
- 使用  useRouter  钩子 (客户端组件)
- 使用  redirect  函数 (服务器组件)
- 使用原生 History API
*/

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function NavLinks() {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname, "pathname");
  useEffect(() => {
    console.log(window, "use client0000");
    console.log(999998766);
  }, []);

  return (
    <nav>
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        Home
      </Link>
      --------------
      <Link
        className={`link ${pathname === "/about" ? "active" : ""}`}
        href="/about"
      >
        About
      </Link>
      --------------
      <button type="button" onClick={() => router.push("/dashboard")}>
        Dashboard
      </button>
    </nav>
  );
}
