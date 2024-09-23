# <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Full Stack Projects" width="52" height="40" />  水气表读数管理 API <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Java Projects Logo" width="52" height="40" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ar.md)

此 API 用于管理客户不同服务的表读数。该应用程序使用 Node.js、TypeScript、Prisma、Express.js 等技术来构建一个强大且可扩展的后端。

![开发状态](https://img.shields.io/badge/status-%E5%BC%80%E5%8F%91%E4%B8%AD-yellow)

## FrontEnd
- 📏 [React Precision Application](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md) 

![使用 Docker 启动后端](./src/gifs/apiMeasure.gif)
![创建客户的 POST 请求](./src/images/postCustomer.png)

## 使用的技术

- **Node.js**: 服务器端 JavaScript 运行环境。
- **TypeScript**: JavaScript 的类型超集，增加了静态类型支持。
- **Express.js**: Node.js 的简洁而灵活的 Web 框架。
- **Prisma**: 简化数据库访问的 ORM 工具。
- **MySQL**: 开发过程中使用的数据库。
- **ESLint**: 用于代码质量和风格的静态检查工具。
- **Jest**: 用于代码测试的框架。
- **Mocha**: 另外用于测试的框架。
- **Google Generative AI**: 集成用于分析表读数图片并提取数字读数。
- **Swagger**: 集成用于自动生成 API 文档。

## 项目结构

项目组织采用模块化结构，便于维护和扩展。主要的文件夹和文件如下：

- `src/`: 包含应用程序的源代码。
  - `controllers/`: 处理请求的控制器逻辑。
  - `db/`: 创建 Prisma 实例以在整个应用程序中连接数据库。
  - `exceptions/`: 自定义异常用于错误处理。
  - `interfaces/`: 用于函数参数和返回值的接口和类型定义。
  - `middlewares/`: 用于数据验证和处理的中间件。
  - `models/`: 与数据库交互的逻辑。
  - `services/`: 服务层，负责与 Prisma 交互并实现业务逻辑。
  - `routes/`: 定义 API 路由。
  - `utils/`: 实用工具，如图像处理和与 Google Generative AI API 的交互。
  - `tests/`: 自动化测试，用于检查功能性。

## 功能

- **读数列表**: 可查看某个客户的所有读数，并按读数类型进行过滤。
- **图像管理**: 读数图片通过 Base64 格式保存并通过临时 URL 进行访问。
- **参数验证**: 中间件用于验证输入数据，确保请求的正确性。
- **使用 Google Generative AI 进行图像分析**: API 分析表读数图片并提取出显示的用量值。

## 启动项目

### 环境要求

- Node.js
- Docker（可选用于开发）

### 安装步骤

1. 克隆仓库：
    ```bash
    git clone https://github.com/your-username/apiShopper.git
    cd apiMeasureWaterAndGas
    ```

2. 安装依赖：
    ```bash
    npm install
    ```

3. 配置环境变量：
    - 创建 `.env` 文件并填写必要的配置信息。
    - 示例：
      ```env
      DATABASE_URL="file:./dev.db"
      GEMINI_API_KEY="your_google_api_key"
      HOST="http://localhost:3000"
      ```

4. 运行数据库迁移：
    ```bash
    npx prisma migrate dev
    ```

5. 启动服务器：
    ```bash
    npm run dev
    ```

### 使用 Docker

你可以使用 Docker 启动项目。运行以下命令：

```bash
docker-compose up --build
```

## 测试

测试使用 Jest 和 Mocha 进行。运行所有测试：

```bash
npm run test
```

## 贡献

如果您想做出贡献，可以打开 issues 或提交 pull requests。欢迎任何形式的贡献！

## 可用的脚本

- `start`: 启动应用程序。
- `dev`: 在开发模式下启动应用程序。
- `build`: 将 TypeScript 编译为 JavaScript。
- `lint`: 使用 ESLint 检查代码质量。
- `lint:fix`: 自动修复 ESLint 检查发现的问题。
- `prisma:generate`: 生成 Prisma 类型。
- `prisma:migrate`: 执行数据库迁移。
- `prisma:seed`: 使用测试数据填充数据库。
- `docker`: 安装依赖，生成 Prisma 类型，执行迁移，并使用 Nodemon 启动服务器。
- `test`: 使用 Mocha 和 Jest 运行所有测试。

## 图像管理

用于保存和生成图像 URL 的实用工具：

- **`saveBase64Image`**: 将 Base64 图像保存到服务器。
- **`getImageUrl`**: 生成访问图像的临时 URL。
- **`extractMimeType`**: 从 Base64 图像中提取 MIME 类型。
- **`extractSize`**: 计算 Base64 图像的大小。

## 使用 Google Generative AI 进行图像分析

**`checkMeasureValue`** 函数使用 Google Generative AI 分析表读数图片并提取用量值。

```javascript
async function checkMeasureValue(mime: string, base64: string): Promise<number> {
  const result = await model.generateContent([
    {
      inlineData: {
        mimeType: mime,
        data: base64
      }
    },
    { text: PROMPT }
  ]);

  return Number(result.response.text().match(/\d+/)[0]);
}
```

此功能确保从提供的图像中准确提取表读数值。

## 其他项目

- 💎 [Delivery BackEnd](https://github.com/SamuelRocha91/delivery_back) 
- 🛒 [Consumy Application](https://github.com/SamuelRocha91/consumy) 
- 👨‍💼 [Seller Application](https://github.com/SamuelRocha91/seller_application) 
- 💲 [Paymenty API](https://github.com/SamuelRocha91/paymenty) 
