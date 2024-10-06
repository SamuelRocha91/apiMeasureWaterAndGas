# <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" /> 水电表读数 API <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ar.md)

这是一个用于管理客户不同服务读数的 API。该应用程序使用 Node.js、TypeScript、Prisma、Express.js 等技术，以提供可靠且可扩展的后端。

![状态：开发中](https://img.shields.io/badge/status-%E5%BC%80%E5%8F%91%E4%B8%AD-yellow)

<details>
  <summary><h2>📏 前端</h2></summary>
  
  - 📏 [Precision 应用程序 (React)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md) - 用于水电表读数的界面
  
  ![API 运行情况](./src/gifs/apiMeasure.gif)
  ![创建客户的 POST 请求](./src/images/postCustomer.png)

</details>

<details>
  <summary><h2>🛠️ 使用的技术</h2></summary>

  - **Node.js**：用于服务器端的 JavaScript 运行环境。
  - **TypeScript**：JavaScript 的超集，为代码添加静态类型。
  - **Express.js**：用于 Node.js 的简约 Web 框架。
  - **Prisma**：一个 ORM，使数据库访问更简单。
  - **MySQL**：开发过程中使用的数据库。
  - **ESLint**：一个代码检查工具，帮助保持代码的整洁和标准。
  - **Jest**：用于测试的框架，确保代码质量。
  - **Mocha**：用于额外的测试。
  - **Google Generative AI**：集成用于分析计量器图像并提取读数的数值。
  - **Swagger**：集成用于生成 API 路由文档。

</details>

<details>
  <summary><h2>📁 项目结构</h2></summary>

  项目遵循模块化结构，便于维护和扩展。主要文件夹和文件如下：

  - `src/`：包含应用程序的源代码。
    - `controllers/`：处理请求的控制逻辑。
    - `db/`：生成 Prisma 实例以连接数据库供整个应用使用。
    - `exceptions/`：创建自定义异常，用于在应用运行时处理错误。
    - `interfaces/`：创建接口和类型，以管理函数的参数和返回值。
    - `middlewares/`：检查和处理的中间件函数。
    - `models/`：与数据库连接的逻辑。
    - `services/`：与 Prisma 交互并执行业务操作的服务层。
    - `routes/`：定义 API 路由。
    - `utils/`：实用功能，如图像处理和与 Google Generative AI 的交互。
    - `tests/`：用于检查功能的自动化测试。

</details>

<details>
  <summary><h2>⚙️ 功能</h2></summary>

  - **读数列表**：允许查看特定客户的所有读数，并按读数类型进行过滤。
  - **图像管理**：读数图像通过临时 URL 进行保存和提取，使用 Base64 编码。
  - **参数检查**：中间件用于检查输入参数，确保请求的完整性。
  - **使用 Google Generative AI 分析图像**：API 分析图像并提取消费值。

</details>

<details>
  <summary><h2>🚀 如何运行项目</h2></summary>

  ### 要求

  - Node.js
  - Docker（可选，用于开发环境）

  ### 安装步骤

  1. 克隆存储库：
      ```bash
      git clone https://github.com/SamuelRocha91/apiShopper.git
      cd apiMeasureWaterAndGas
      ```

  2. 安装依赖项：
      ```bash
      npm install
      ```

  3. 配置环境变量：
      - 创建一个 `.env` 文件，包含必要的配置。
      - 示例：
        ```env
        DATABASE_URL="file:./dev.db"
        GEMINI_API_KEY="您的_google_api_密钥"
        HOST="http://localhost:3000"
        ```

  4. 执行数据库迁移：
      ```bash
      npx prisma migrate dev
      ```

  5. 启动服务器：
      ```bash
      npm run dev
      ```

  ### Docker

  您可以使用 Docker 启动项目。请执行：

  ```bash
  docker-compose up --build
  ```

</details>

<details>
  <summary><h2>🧪 测试</h2></summary>

  测试使用 Jest 和 Mocha 执行。要运行所有测试，请执行：

  ```bash
  npm run test
  ```

</details>

<details>
  <summary><h2>🤝 贡献</h2></summary>

  请随时提交问题或发起拉取请求。欢迎任何贡献！

</details>

<details>
  <summary><h2>📜 可用脚本</h2></summary>

  - `start`：启动应用程序。
  - `dev`：以开发模式启动应用程序。
  - `build`：将 TypeScript 代码编译为 JavaScript。
  - `lint`：运行 ESLint 检查代码。
  - `lint:fix`：运行 ESLint 并自动修复问题。
  - `prisma:generate`：生成 Prisma 类型。
  - `prisma:migrate`：执行数据库迁移。
  - `prisma:seed`：用初始数据填充数据库。
  - `docker`：安装依赖项，生成 Prisma 类型，执行迁移并启动服务器。
  - `test`：使用 Mocha 和 Jest 运行所有测试。

</details>

<details>
  <summary><h2>🖼️ 图像设置</h2></summary>

  用于保存和生成图像 URL 的实用功能：

  - **`saveBase64Image`**：将 Base64 图像保存到服务器上的文件中。
  - **`getImageUrl`**：生成访问图像的临时 URL。
  - **`extractMimeType`**：从 Base64 图像中提取 MIME 类型。
  - **`extractSize`**：计算 Base64 图像的大小。

</details>

<details>
  <summary><h2>🔍 使用 Google Generative AI 分析图像</h2></summary>

  **`checkMeasureValue`** 函数使用 Google Generative AI 分析读数图像并提取消费值。

  ```javascript
  async function checkMeasureValue(mime: string, base64: string): Promise<number> {
    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: mime,
          data: base64
        }
      },
    ]);
    return result.content?.[0]?.text ?? 0;
  }
  ```

</details>

<details>
  <summary><h2>📦 其他 API</h2></summary>

  - 🏦 [用户管理 API](https://github.com/SamuelRocha91/paymentAPI/blob/main/README_ch.md)
  - 📦 [供应商 API](https://github.com/SamuelRocha91/sellerAPI/blob/main/README_ch.md)
  - 🎫 [购买 API](https://github.com/SamuelRocha91/consumerAPI/blob/main/README_ch.md)

</details>
