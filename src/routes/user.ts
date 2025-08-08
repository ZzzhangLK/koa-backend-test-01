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

// General routes
router.get('/', getGreeting);

// User collection routes
router.get('/users', getUsers);
router.post('/users', createUser); // Changed from /user to /users for consistency

// User specific routes
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
