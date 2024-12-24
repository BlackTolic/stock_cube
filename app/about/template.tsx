import React from "react";

/**
 * 模板类似于布局，它们都包裹着子布局或页面。与跨路由持久化并保持状态的布局不同，模板在每次导航时都会为其每个子元素创建一个新实例。
 * 这意味着当用户在共享模板的路由之间导航时，子元素的新实例会被挂载，DOM 元素会被重新创建，客户端组件中的状态**不会**被保留，并且效果会被重新同步。

在某些情况下，您可能需要这些特定的行为，而模板将比布局更合适。例如
-在导航时重新同步useEffect。
-在导航时重置子客户端组件的状态。*/

export default function Template({ children }: { children: React.ReactNode }) {
  console.log("开始动态渲染template");
  return <div>template{children}</div>;
}
