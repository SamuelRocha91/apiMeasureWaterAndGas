# API для учета показаний газа и воды

<h2>🌐</h2>
<ul>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README.md" target="_blank">Португальский</a></li>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_es.md" target="_blank">Испанский</a></li>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_en.md" target="_blank">Английский</a></li>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ru.md" target="_blank">Русский</a></li>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ch.md" target="_blank">Китайский</a></li>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ar.md" target="_blank">Арабский</a></li>
</ul>

Это API разработано для управления показаниями счетчиков клиентов по различным видам услуг. Приложение использует Node.js, TypeScript, Prisma, Express.js и другие технологии для создания надежного и масштабируемого бэкенда.

![Статус: В разработке](https://img.shields.io/badge/status-%D0%B2%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B5-yellow)

<a href="https://github.com/SamuelRocha91/precisionReactApplication" target="_blank">Фронтенд React для приложения учета показаний</a>


![Запуск бэкенда с использованием Docker](./src/gifs/apiMeasure.gif)
![POST-запрос для создания клиента](./src/images/postCustomer.png)


## Используемые технологии

- **Node.js**: Среда выполнения JavaScript на стороне сервера.
- **TypeScript**: Надстройка над JavaScript, добавляющая статическую типизацию.
- **Express.js**: Минималистичный веб-фреймворк для Node.js.
- **Prisma**: ORM, упрощающий доступ к базе данных.
- **Mysql**: База данных, используемая в процессе разработки.
- **ESLint**: Инструмент для поддержания чистоты и стандартизации кода.
- **Jest**: Фреймворк для тестирования, используемый для проверки качества кода.
- **Mocha**: Дополнительно используется для тестирования.
- **Google Generative AI**: Интегрирован для анализа изображений счетчиков и извлечения числовых значений показаний.
- **Swagger**: Интегрирован для генерации документации API.

## Структура проекта

Проект организован по модульной структуре для упрощения поддержки и масштабирования. Основные папки и файлы:

- `src/`: Содержит исходный код приложения.
  - `controllers/`: Логика обработки запросов.
  - `db/`: Создает экземпляр Prisma для подключения к базе данных во всем приложении.
  - `exceptions/`: Пользовательские исключения для обработки ошибок.
  - `interfaces/`: Интерфейсы и типы для работы с параметрами и результатами функций.
  - `middlewares/`: Промежуточные функции для валидации и обработки данных.
  - `models/`: Логика работы с базой данных.
  - `services/`: Слой сервисов, который взаимодействует с Prisma и реализует бизнес-логику.
  - `routes/`: Определение маршрутов API.
  - `utils/`: Утилиты, такие как работа с изображениями и взаимодействие с API Google Generative AI.
  - `tests/`: Автоматические тесты для проверки функциональности.

## Функциональность

- **Список показаний**: Позволяет просматривать все показания конкретного клиента с фильтрацией по типу показаний.
- **Управление изображениями**: Изображения показаний сохраняются и извлекаются через временные URL-адреса, используя Base64.
- **Валидация параметров**: Промежуточное ПО для валидации входных данных, гарантируя корректность запросов.
- **Анализ изображений с Google Generative AI**: API анализирует изображения счетчиков и извлекает значение потребления, показанное на изображении.

## Как запустить проект

### Требования

- Node.js
- Docker (опционально для разработки)

### Установка

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/ваш-юзернейм/apiShopper.git
    cd apiMeasureWaterAndGas
    ```

2. Установите зависимости:
    ```bash
    npm install
    ```

3. Настройте переменные окружения:
    - Создайте файл `.env` с необходимыми настройками.
    - Пример:
      ```env
      DATABASE_URL="file:./dev.db"
      GEMINI_API_KEY="ваш_ключ_доступа_google"
      HOST="http://localhost:3000"
      ```

4. Запустите миграции базы данных:
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

## Тестирование

Тесты запускаются с помощью Jest и Mocha. Для запуска всех тестов:

```bash
npm run test
```

## Вклад

Открывайте issues или отправляйте pull requests, если хотите внести свой вклад. Любой вклад приветствуется!

## Доступные скрипты

- `start`: Запускает приложение.
- `dev`: Запускает приложение в режиме разработки.
- `build`: Компилирует TypeScript в JavaScript.
- `lint`: Запускает ESLint для проверки соответствия кода стандартам.
- `lint:fix`: Запускает ESLint и автоматически исправляет проблемы.
- `prisma:generate`: Генерирует типы для Prisma.
- `prisma:migrate`: Выполняет миграции базы данных.
- `prisma:seed`: Заполняет базу данных тестовыми данными.
- `docker`: Устанавливает зависимости, генерирует типы Prisma, выполняет миграции и запускает сервер с использованием Nodemon.
- `test`: Запускает все тесты с использованием Mocha и Jest.

## Управление изображениями

Утилиты для сохранения и генерации URL-адресов для изображений:

- **`saveBase64Image`**: Сохраняет изображение Base64 на сервере.
- **`getImageUrl`**: Генерирует временный URL для доступа к изображению.
- **`extractMimeType`**: Извлекает MIME-тип из Base64-изображения.
- **`extractSize`**: Рассчитывает размер изображения в формате Base64.

## Анализ изображений с помощью Google Generative AI

Функция **`checkMeasureValue`** использует Google Generative AI для анализа изображений счетчиков и извлечения значения потребления.

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

Эта функция используется для обеспечения точности извлечения значения показания из предоставленного изображения.