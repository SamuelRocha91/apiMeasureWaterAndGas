# <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" /> واجهة برمجة التطبيقات لقراءات عدادات المياه والكهرباء <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ar.md)

هذه واجهة برمجة تطبيقات لإدارة قراءات خدمات مختلفة لعملاء مختلفين. تم بناء التطبيق باستخدام تقنيات Node.js و TypeScript و Prisma و Express.js، لتقديم واجهة خلفية موثوقة وقابلة للتوسع.

![الحالة: قيد التطوير](https://img.shields.io/badge/status-%D9%82%D9%8A%D8%AF_%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-yellow)

  ![حالة واجهة برمجة التطبيقات](./src/gifs/apiMeasure.gif)
  ![طلب POST لإنشاء عميل](./src/images/postCustomer.png)
  
<details>
  <summary><h2>📏 الواجهة الأمامية</h2></summary>
  
  - 📏 [تطبيق Precision (React)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md) - واجهة لقراءات عدادات المياه والكهرباء
  

</details>

<details>
  <summary><h2>🛠️ التقنيات المستخدمة</h2></summary>

  - **Node.js**: بيئة تشغيل JavaScript للجانب الخادم.
  - **TypeScript**: مجموعة فوق JavaScript تضيف أنواع ثابتة للكود.
  - **Express.js**: إطار عمل ويب بسيط لـ Node.js.
  - **Prisma**: ORM تجعل الوصول إلى قاعدة البيانات أسهل.
  - **MySQL**: قاعدة البيانات المستخدمة خلال عملية التطوير.
  - **ESLint**: أداة لفحص الكود تساعد في الحفاظ على نظافة المعايير.
  - **Jest**: إطار عمل للاختبار يضمن جودة الكود.
  - **Mocha**: للاختبارات الإضافية.
  - **Google Generative AI**: تم تكاملها لتحليل صور العدادات واستخراج القيم.
  - **Swagger**: تم تكاملها لتوليد وثائق مسارات واجهة برمجة التطبيقات.

</details>

<details>
  <summary><h2>📁 هيكل المشروع</h2></summary>

  يتبع المشروع هيكلًا معياريًا لتسهيل الصيانة والتوسع. الملفات والمجلدات الرئيسية هي كما يلي:

  - `src/`: يحتوي على الكود المصدري للتطبيق.
    - `controllers/`: منطق التحكم الذي يعالج الطلبات.
    - `db/`: يولد مثيل Prisma للاتصال بقاعدة البيانات للاستخدام في جميع أنحاء التطبيق.
    - `exceptions/`: إنشاء استثناءات مخصصة للتعامل مع الأخطاء أثناء تشغيل التطبيق.
    - `interfaces/`: إنشاء الواجهات والأنواع لإدارة معلمات الدوال وقيم الإرجاع.
    - `middlewares/`: دوال الوسطاء للتحقق والمعالجة.
    - `models/`: منطق الاتصال بقاعدة البيانات.
    - `services/`: طبقة الخدمة التي تتفاعل مع Prisma وتنفذ العمليات التجارية.
    - `routes/`: تعريف مسارات واجهة برمجة التطبيقات.
    - `utils/`: وظائف مساعدة مثل معالجة الصور والتفاعل مع Google Generative AI.
    - `tests/`: اختبارات تلقائية للتحقق من الوظائف.

</details>

<details>
  <summary><h2>⚙️ الميزات</h2></summary>

  - **قائمة القراءات**: يسمح بعرض جميع القراءات لعميل معين وتصفية النتائج حسب نوع القراءة.
  - **إدارة الصور**: يتم حفظ صور القراءات واسترجاعها باستخدام URL مؤقت، باستخدام تشفير Base64.
  - **التحقق من المعلمات**: يتم استخدام الوسطاء للتحقق من المعلمات المدخلة لضمان تكامل الطلبات.
  - **تحليل الصور باستخدام Google Generative AI**: تقوم واجهة برمجة التطبيقات بتحليل الصور واستخراج القيم الاستهلاكية.

</details>

<details>
  <summary><h2>🚀 كيفية تشغيل المشروع</h2></summary>

  ### المتطلبات

  - Node.js
  - Docker (اختياري، لبيئة التطوير)

  ### خطوات التثبيت

  1. استنساخ المستودع:
      ```bash
      git clone https://github.com/SamuelRocha91/apiShopper.git
      cd apiMeasureWaterAndGas
      ```

  2. تثبيت التبعيات:
      ```bash
      npm install
      ```

  3. تكوين متغيرات البيئة:
      - أنشئ ملف `.env` يحتوي على التكوينات الضرورية.
      - مثال:
        ```env
        DATABASE_URL="file:./dev.db"
        GEMINI_API_KEY="مفتاح_واجهة_برمجة_التطبيقات_الخاص_بك"
        HOST="http://localhost:3000"
        ```

  4. تنفيذ ترحيل قاعدة البيانات:
      ```bash
      npx prisma migrate dev
      ```

  5. بدء تشغيل الخادم:
      ```bash
      npm run dev
      ```

  ### Docker

  يمكنك تشغيل المشروع باستخدام Docker. يرجى تنفيذ:

  ```bash
  docker-compose up --build
  ```

</details>

<details>
  <summary><h2>🧪 الاختبارات</h2></summary>

  يتم تنفيذ الاختبارات باستخدام Jest و Mocha. لتشغيل جميع الاختبارات، يرجى تنفيذ:

  ```bash
  npm run test
  ```

</details>

<details>
  <summary><h2>📜 النصوص المتاحة</h2></summary>

  - `start`: بدء تشغيل التطبيق.
  - `dev`: بدء تشغيل التطبيق في وضع التطوير.
  - `build`: تحويل كود TypeScript إلى JavaScript.
  - `lint`: تشغيل فحص ESLint للكود.
  - `lint:fix`: تشغيل ESLint وإصلاح المشكلات تلقائيًا.
  - `prisma:generate`: توليد أنواع Prisma.
  - `prisma:migrate`: تنفيذ ترحيل قاعدة البيانات.
  - `prisma:seed`: ملء قاعدة البيانات بالبيانات الأولية.
  - `docker`: تثبيت التبعيات، وتوليد أنواع Prisma، وتنفيذ الترحيل، وبدء تشغيل الخادم.
  - `test`: تشغيل جميع الاختبارات باستخدام Mocha و Jest.

</details>

<details>
  <summary><h2>🖼️ إعداد الصور</h2></summary>

  وظائف مساعدة لحفظ وتوليد عناوين URL للصور:

  - **`saveBase64Image`**: لحفظ صورة Base64 على الخادم.
  - **`getImageUrl`**: لتوليد عنوان URL مؤقت للوصول إلى الصورة.
  - **`extractMimeType`**: لاستخراج نوع MIME من صورة Base64.
  - **`extractSize`**: لحساب حجم صورة Base64.

</details>

<details>
  <summary><h2>🔍 استخدام Google Generative AI لتحليل الصور</h2></summary>

  تستخدم الدالة **`checkMeasureValue`** Google Generative AI لتحليل صورة القراءة واستخراج القيمة الاستهلاكية.

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
  <summary><h2>📦 واجهات برمجة التطبيقات الأخرى</h2></summary>

  - 🏦 [واجهة برمجة تطبيقات إدارة المستخدمين](https://github.com/SamuelRocha91/paymentAPI/blob

/main/README.md): إدارة معلومات العملاء.
  - 💳 [واجهة برمجة تطبيقات الدفع](https://github.com/SamuelRocha91/paymentAPI/blob/main/README.md): لإجراء المدفوعات.
  - 🛒 [واجهة برمجة تطبيقات إدارة المنتجات](https://github.com/SamuelRocha91/productAPI/blob/main/README.md): إدارة بيانات المنتجات.

</details>

<details>
  <summary><h2>⚖️ الترخيص</h2></summary>

  هذا المشروع مرخص بموجب [MIT License](./LICENSE).

</details>

<details>
  <summary><h2>📞 الاتصال</h2></summary>

  يمكنك الاتصال بي عبر البريد الإلكتروني: samuelrocha.91@gmail.com.

</details>
