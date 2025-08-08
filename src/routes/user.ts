import Router from '@koa/router';
import {
  getGreeting,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = new Router();

// 通用路由
router.get('/', getGreeting);

// 用户集合路由
router.get('/users', getUsers);
router.post('/users', createUser); // 为了保持一致性，从 /user 改为 /users

// 特定用户路由
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
