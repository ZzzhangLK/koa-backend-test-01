import type { Context } from '../types/index.js';
import type { Next } from 'koa';
import { sendError, ResponseCode } from '../utils/response.js';

export const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err: any) {
    console.error('捕获到全局错误:', err);
    sendError(
      ctx,
      ResponseCode.INTERNAL_SERVER_ERROR,
      err.message || '服务器发生未预期的错误',
    );
    ctx.app.emit('error', err, ctx);
  }
};
