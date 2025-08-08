import type { Context, User } from '../types/index.js';
import { sendSuccess, sendError, ResponseCode } from '../utils/response.js';

export const getGreeting = async (ctx: Context) => {
  sendSuccess(ctx, { message: '你好, 世界!' });
};

export const getUsers = async (ctx: Context) => {
  // 在真实的应用中，这里会从数据库查询用户列表
  const users = [
    { username: 'alice', email: 'alice@example.com' },
    { username: 'bob', email: 'bob@example.com' },
  ];
  sendSuccess(ctx, users, '用户列表获取成功');
};

export const getUserById = async (ctx: Context) => {
  const { id } = ctx.params; // 从 URL 路径中获取 id
  // 模拟从数据库查找用户
  console.log(`正在查找 ID 为 ${id} 的用户...`);
  const user = { id, username: 'mockUser', email: 'mock@example.com' }; // 模拟找到的用户

  if (user) {
    sendSuccess(ctx, user, '用户详情获取成功');
  } else {
    sendError(ctx, ResponseCode.NOT_FOUND, '未找到指定用户');
  }
};

export const updateUser = async (ctx: Context) => {
  const { id } = ctx.params;
  const { username, email } = ctx.request.body as Partial<User>; // 使用 Partial<User> 因为更新时可能只提供部分字段

  // 模拟更新数据库
  console.log(`正在更新 ID 为 ${id} 的用户，新数据为:`, { username, email });

  sendSuccess(ctx, { id, username, email }, '用户更新成功');
};

export const deleteUser = async (ctx: Context) => {
  const { id } = ctx.params;

  // 模拟从数据库删除
  console.log(`正在删除 ID 为 ${id} 的用户...`);

  sendSuccess(ctx, null, '用户删除成功');
};

export const createUser = async (ctx: Context) => {
  // `body` 由 koa-bodyparser 中间件解析后附加到请求对象上
  const { username, email } = ctx.request.body as User;

  // --- 数据校验开始 ---
  if (!username || typeof username !== 'string' || username.trim() === '') {
    return sendError(
      ctx,
      ResponseCode.BAD_REQUEST,
      '用户名是必填项，且必须为非空字符串',
    );
  }
  if (!email || typeof email !== 'string' || !/\S+@\S+\.\S+/.test(email)) {
    return sendError(
      ctx,
      ResponseCode.BAD_REQUEST,
      '必须提供一个有效的邮箱地址',
    );
  }
  // --- 数据校验结束 ---

  // 在真实的应用中，这里会将新用户保存到数据库
  const newUser = { username: username.trim(), email };
  sendSuccess(ctx, newUser, '用户创建成功', ResponseCode.CREATED);
};
