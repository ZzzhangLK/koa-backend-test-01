import type { Context as KoaContext, Request as KoaRequest } from 'koa';

// 扩展 Koa 的 Request 接口以包含 `body` 属性
export interface RequestWithBody extends KoaRequest {
  body?: any; // `body` 属性由 koa-bodyparser 中间件添加
}

// 创建一个自定义的 Context 接口，它使用我们新的 Request 类型
export interface Context extends KoaContext {
  request: RequestWithBody;
}

// 应用内的业务类型定义
export interface User {
  username: string;
  email: string;
}
