# Koa.js TypeScript 后端项目模板

这是一个使用 Koa.js 和 TypeScript 构建的、结构清晰、可扩展的现代化后端项目模板。

---

## ✨ 特性

- **现代化技术栈**: 使用 TypeScript、Koa.js 和 ES Modules。
- **专业的工程化结构**: 清晰的目录划分，将路由、控制器、中间件等逻辑分离。
- **统一的开发流程**: 集成了 ESLint 和 Prettier，确保代码风格和质量一致。
- **稳定的“编译-运行”工作流**: 使用 `tsc` 进行编译，`nodemon` 监视文件变化并自动重启服务，兼顾开发效率和运行稳定性。
- **标准化的 API 响应**: 内置了统一的成功和错误响应格式。
- **全局错误处理**: 强大的安全网，能捕获所有未处理的异常，防止服务器崩溃。

---

## 🛠️ 技术栈

- **框架**: [Koa.js](https://koajs.com/)
- **路由**: [@koa/router](https://github.com/koajs/router)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **开发工具**: 
  - [nodemon](https://nodemon.io/): 自动重启服务。
  - [ts-node](https://github.com/TypeStrong/ts-node): 直接运行 TypeScript。
  - [ESLint](https://eslint.org/): 代码检查。
  - [Prettier](https://prettier.io/): 代码格式化。
- **包管理器**: [Yarn](https://yarnpkg.com/)

---

## 🚀 快速开始

### 1. 安装依赖

确保您已经安装了 [Node.js](https://nodejs.org/) (推荐 v18 或更高版本) 和 [Yarn](https://yarnpkg.com/)。

```bash
yarn install
```

### 2. 启动开发服务器

```bash
yarn start
```

这个命令会启动 `nodemon`，它会：
1. 首次启动时，自动运行 `tsc` 将 `src` 目录下的 TypeScript 源码编译成 JavaScript，并输出到 `dist` 目录。
2. 使用 `node` 启动编译后的 `dist/index.js` 文件。
3. 持续监视 `src` 目录中的文件变化，一旦有修改，会自动重复以上步骤。

服务器将会在 `http://localhost:3000` 上运行。

---

## 📜 可用脚本

- `yarn start`: 启动开发服务器 (带文件监视和自动重启)。
- `yarn build`: 手动运行 TypeScript 编译器，将代码编译到 `dist` 目录。
- `yarn lint`: 使用 ESLint 检查代码中的潜在问题。
- `yarn format`: 使用 Prettier 格式化整个项目的代码。

---

## API 接口文档

### 用户 (Users)

- **`GET /`**
  - **描述**: 一个简单的欢迎接口。
  - **成功响应**: `200 OK`
    ```json
    {
      "code": 200,
      "message": "你好, 世界!",
      "data": {
        "message": "你好, 世界!"
      }
    }
    ```

- **`GET /users`**
  - **描述**: 获取所有用户的列表 (模拟数据)。
  - **成功响应**: `200 OK`

- **`POST /users`**
  - **描述**: 创建一个新用户。
  - **请求体** (JSON):
    ```json
    {
      "username": "your_username",
      "email": "your_email@example.com"
    }
    ```
  - **成功响应**: `201 Created`
  - **失败响应**: `400 Bad Request` (如果 `username` 或 `email` 缺失或无效)。

- **`GET /users/:id`**
  - **描述**: 获取指定 ID 的用户详情 (模拟数据)。
  - **成功响应**: `200 OK`

- **`PUT /users/:id`**
  - **描述**: 更新指定 ID 的用户信息。
  - **请求体** (JSON):
    ```json
    {
      "username": "new_username"
    }
    ```
  - **成功响应**: `200 OK`

- **`DELETE /users/:id`**
  - **描述**: 删除指定 ID 的用户。
  - **成功响应**: `200 OK`
