# <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" /> API учета показаний газа и воды <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ar.md)

Это API, разработанное для управления показаниями клиентов по различным услугам. Приложение использует Node.js, TypeScript, Prisma, Express.js и другие технологии для обеспечения надежного и масштабируемого бэкенда.

![Статус: В Разработке](https://img.shields.io/badge/status-%D0%B2%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B5-yellow)

<details>
  <summary><h2>📏 FrontEnd</h2></summary>
  
  - 📏 [Приложение Precision на React](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ru.md) - Интерфейс для учета показаний газа и воды
  
  ![Работа бэкенда с Docker](./src/gifs/apiMeasure.gif)
  ![POST-запрос для создания клиента](./src/images/postCustomer.png)

</details>

<details>
  <summary><h2>🛠️ Используемые технологии</h2></summary>

  - **Node.js**: Среда выполнения JavaScript на стороне сервера.
  - **TypeScript**: Суперсет JavaScript, добавляющий статическую типизацию в код.
  - **Express.js**: Минималистичный веб-фреймворк для Node.js.
  - **Prisma**: ORM, который упрощает доступ к базе данных.
  - **MySQL**: Используемая база данных в процессе разработки.
  - **ESLint**: Инструмент для линтинга, помогающий поддерживать код в чистоте и стандарте.
  - **Jest**: Фреймворк для тестирования, используемый для обеспечения качества кода.
  - **Mocha**: Используется для дополнительных тестов.
  - **Google Generative AI**: Интегрирован для анализа изображений счетчиков и извлечения числовых значений показаний.
  - **Swagger**: Интегрирован для генерации документации для маршрутов.

</details>

<details>
  <summary><h2>📁 Структура проекта</h2></summary>

  Проект следует модульной структуре для облегчения обслуживания и масштабируемости. Основные папки и файлы:

  - `src/`: Содержит исходный код приложения.
    - `controllers/`: Логика управления, где обрабатываются запросы.
    - `db/`: Генерирует экземпляр Prisma для подключения к базе данных для всего приложения.
    - `exceptions/`: Создает пользовательские исключения для обработки ошибок во время выполнения приложения.
    - `interfaces/`: Создает интерфейсы и типы для управления параметрами и возвращаемыми значениями функций.
    - `middlewares/`: Промежуточные функции для проверок и обработки.
    - `models/`: Логика подключения к базе данных.
    - `services/`: Уровень сервисов, взаимодействующий с Prisma и выполняющий бизнес-операции.
    - `routes/`: Определение маршрутов API.
    - `utils/`: Утилитарные функции, такие как работа с изображениями и взаимодействие с API Google Generative AI.
    - `tests/`: Автоматизированные тесты для проверки функциональности.

</details>

<details>
  <summary><h2>⚙️ Функциональности</h2></summary>

  - **Список показаний**: Позволяет просматривать все показания конкретного клиента с фильтрацией по типу показания.
  - **Управление изображениями**: Изображения показаний сохраняются и извлекаются через временные URL-адреса, используя Base64.
  - **Проверка параметров**: Промежуточное ПО для проверки входных параметров, обеспечивающее целостность запросов.
  - **Анализ изображений с помощью Google Generative AI**: API анализирует изображения показаний и извлекает значение потребления.

</details>

<details>
  <summary><h2>🚀 Как запустить проект</h2></summary>

  ### Требования

  - Node.js
  - Docker (опционально для окружения разработки)

  ### Установка

  1. Клонируйте репозиторий:
      ```bash
      git clone https://github.com/SamuelRocha91/apiShopper.git
      cd apiMeasureWaterAndGas
      ```

  2. Установите зависимости:
      ```bash
      npm install
      ```

  3. Настройте переменные окружения:
      - Создайте файл `.env` с необходимыми конфигурациями.
      - Пример:
        ```env
        DATABASE_URL="file:./dev.db"
        GEMINI_API_KEY="ваш_api_ключ_google"
        HOST="http://localhost:3000"
        ```

  4. Выполните миграции базы данных:
      ```bash
      npx prisma migrate dev
      ```

  5. Запустите сервер:
      ```bash
      npm run dev
      ```

  ### Docker

  Вы можете запустить проект с использованием Docker. Для этого выполните:

  ```bash
  docker-compose up --build
  ```

</details>

<details>
  <summary><h2>🧪 Тесты</h2></summary>

  Тесты выполняются с помощью Jest и Mocha. Чтобы запустить все тесты:

  ```bash
  npm run test
  ```

</details>

<details>
  <summary><h2>🤝 Вклад</h2></summary>

  Не стесняйтесь открывать вопросы или отправлять пулл-реквесты. Все вклады приветствуются!

</details>

<details>
  <summary><h2>📜 Доступные скрипты</h2></summary>

  - `start`: Запускает приложение.
  - `dev`: Запускает приложение в режиме разработки.
  - `build`: Компилирует код TypeScript в JavaScript.
  - `lint`: Запускает ESLint для проверки соответствия кода.
  - `lint:fix`: Запускает ESLint и автоматически исправляет проблемы.
  - `prisma:generate`: Генерирует типы Prisma.
  - `prisma:migrate`: Выполняет миграции базы данных.
  - `prisma:seed`: Заполняет базу данных начальными данными.
  - `docker`: Устанавливает зависимости, генерирует типы Prisma, выполняет миграции и запускает сервер с использованием Nodemon.
  - `test`: Запускает все тесты с использованием Mocha и Jest.

</details>

<details>
  <summary><h2>🖼️ Настройка изображения</h2></summary>

  Утилитарные функции для сохранения и генерации URL-адресов для изображений:

  - **`saveBase64Image`**: Сохраняет изображение в формате Base64 в файл на сервере.
  - **`getImageUrl`**: Генерирует временный URL для доступа к изображению.
  - **`extractMimeType`**: Извлекает тип MIME из изображения в формате Base64.
  - **`extractSize`**: Вычисляет размер изображения в формате Base64.

</details>

<details>
  <summary><h2>🔍 Анализ изображений с помощью Google Generative AI</h2></summary>

  Функция **`checkMeasureValue`** использует Google Generative AI для анализа изображений показаний и извлечения значения потребления.

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
  <summary><h2>📦 Другие API</h2></summary>

  - 🏦 [API учета пользователей](https://github.com/SamuelRocha91/paymentAPI/blob/main/README_ru.md)
  - 📦 [API Продавцов](https://github.com/SamuelRocha91/sellerAPI/blob/main/README_ru.md)
  - 🎫 [API Покупок](https://github.com/SamuelRocha91/consumerAPI/blob/main/README_ru.md)

</details>
