import Router from '@koa/router';
import userRouter from './user.js';

const router = new Router();

// 组合所有路由
router.use(userRouter.routes(), userRouter.allowedMethods());

export default router;
