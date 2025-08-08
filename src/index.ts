import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { errorHandler } from './middleware/errorHandler.js';
import rootRouter from './routes/index.js';

const app = new Koa();

// 注册中间件
app.use(errorHandler);
app.use(bodyParser());

// 注册路由
app.use(rootRouter.routes()).use(rootRouter.allowedMethods());

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器正在端口 ${PORT} 上运行`);
});
