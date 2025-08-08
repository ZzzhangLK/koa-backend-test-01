import type { Context } from '../types/index.js';

export const ResponseCode = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404, // Add this line
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const sendSuccess = <T>(
  ctx: Context,
  data: T,
  message = '操作成功',
  code: (typeof ResponseCode)[keyof typeof ResponseCode] = ResponseCode.SUCCESS,
) => {
  ctx.status = code;
  ctx.body = { code, message, data };
};

export const sendError = (
  ctx: Context,
  code: (typeof ResponseCode)[keyof typeof ResponseCode],
  message: string,
) => {
  ctx.status = code;
  ctx.body = { code, message, data: null };
};
