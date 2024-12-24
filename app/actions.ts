"use server";

import { redirect } from "next/navigation";

export async function createUser(prevState: any, formData: FormData) {
  /**
   * 来自 `fetch` 的响应将自动缓存。
   * 如果您*不想*缓存来自 `fetch` 的响应，您可以执行以下操作
   * let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })
   * */
  const res = await fetch("https://www.baidu.com");
  console.log(res, "res-0000");
  const json = await res.json();
  console.log(json, "json");
  if (!res.ok) {
    return { message: "Please enter a valid email" };
  }

  redirect("/dashboard");
}
