# <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Full Stack Projects" width="52" height="40" /> واجهة برمجة تطبيقات قراءة عدادات المياه والغاز<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Java Projects Logo" width="52" height="40" />  

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ar.md)

تعتبر هذه واجهة برمجة تطبيقات تم تطويرها لإدارة قراءات العملاء من خدمات مختلفة. تستخدم التطبيق تقنيات مثل Node.js و TypeScript و Prisma و Express.js وغيرها لتقديم خلفية قوية وقابلة للتوسع.

![الحالة: قيد التطوير](https://img.shields.io/badge/status-%D9%82%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-yellow)

## FrontEnd
- 📏 [React Precision Application](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md)


![تشغيل الخلفية باستخدام Docker](./src/gifs/apiMeasure.gif)
![طلب POST لإنشاء عميل](./src/images/postCustomer.png)

## التقنيات المستخدمة

- **Node.js**: بيئة تشغيل JavaScript على الخادم.
- **TypeScript**: مجموعة من JavaScript تضيف دعمًا للنوع الثابت.
- **Express.js**: إطار عمل ويب بسيط ومرن لـ Node.js.
- **Prisma**: ORM تسهّل الوصول إلى قاعدة البيانات.
- **MySQL**: قاعدة البيانات المستخدمة أثناء التطوير.
- **ESLint**: أداة للتدقيق لقياس جودة الكود.
- **Jest**: إطار عمل للاختبارات لضمان جودة الكود.
- **Mocha**: إطار عمل للاختبارات الإضافية.
- **Google Generative AI**: مدمج لتحليل صور العدادات واستخراج القيم الرقمية للقراءات.
- **Swagger**: مدمج لتوليد وثائق API.

## هيكل المشروع

يتم تنظيم المشروع بطريقة نموذجية لتسهيل الصيانة والتوسع. المجلدات والملفات الرئيسية هي:

- `src/`: يحتوي على كود المصدر للتطبيق.
  - `controllers/`: منطق التحكم، حيث تتم معالجة الطلبات.
  - `db/`: ينشئ مثيل Prisma للاتصال بقاعدة البيانات عبر التطبيق.
  - `exceptions/`: ينشئ استثناءات مخصصة للتعامل مع الأخطاء أثناء تشغيل التطبيق.
  - `interfaces/`: ينشئ واجهات وأنواع للتعامل مع معلمات وإرجاع الدوال.
  - `middlewares/`: الوسطاء للتحقق والمعالجة.
  - `models/`: منطق الاتصال بقاعدة البيانات.
  - `services/`: طبقة الخدمات التي تتفاعل مع Prisma وتنفذ العمليات التجارية.
  - `routes/`: تعريف طرق API.
  - `utils/`: الوظائف المساعدة، مثل معالجة الصور والتفاعل مع API لـ Google Generative AI.
  - `tests/`: اختبارات آلية للتحقق من الوظائف.

## الوظائف

- **قائمة القراءات**: يسمح بعرض جميع قراءات عميل معين، مع إمكانية التصفية حسب نوع القراءة.
- **إدارة الصور**: تُخزن الصور الخاصة بالقراءات وتُسترجع عبر روابط مؤقتة، باستخدام Base64.
- **التحقق من المعلمات**: وسيط للتحقق من معلمات الإدخال، لضمان سلامة الطلبات.
- **تحليل الصور باستخدام Google Generative AI**: تقوم الواجهة بتحليل صور القراءات واستخراج القيمة المعروضة.

## كيفية تشغيل المشروع

### المتطلبات

- Node.js
- Docker (اختياري لبيئة التطوير)

### التثبيت

1. قم باستنساخ المستودع:
    ```bash
    git clone https://github.com/your-username/apiShopper.git
    cd apiMeasureWaterAndGas
    ```

2. قم بتثبيت التبعيات:
    ```bash
    npm install
    ```

3. قم بتكوين متغيرات البيئة:
    - أنشئ ملف `.env` مع الإعدادات اللازمة.
    - مثال:
      ```env
      DATABASE_URL="file:./dev.db"
      GEMINI_API_KEY="your_google_api_key"
      HOST="http://localhost:3000"
      ```

4. قم بتشغيل ترحيلات قاعدة البيانات:
    ```bash
    npx prisma migrate dev
    ```

5. ابدأ الخادم:
    ```bash
    npm run dev
    ```

### Docker

يمكنك تشغيل المشروع باستخدام Docker. لتنفيذ ذلك، قم بتشغيل:

```bash
docker-compose up --build
```

## الاختبارات

يتم تنفيذ الاختبارات باستخدام Jest و Mocha. لتشغيل جميع الاختبارات:

```bash
npm run test
```

## المساهمة

لا تتردد في فتح قضايا أو إرسال طلبات سحب. كل المساهمات مرحب بها!

## السكربتات المتاحة

- `start`: بدء تشغيل التطبيق.
- `dev`: بدء تشغيل التطبيق في وضع التطوير.
- `build`: تحويل TypeScript إلى JavaScript.
- `lint`: تشغيل ESLint للتحقق من توافق الكود.
- `lint:fix`: تشغيل ESLint وإصلاح المشكلات تلقائيًا.
- `prisma:generate`: توليد أنواع Prisma.
- `prisma:migrate`: تنفيذ ترحيلات قاعدة البيانات.
- `prisma:seed`: ملء قاعدة البيانات ببيانات أولية.
- `docker`: تثبيت التبعيات، توليد أنواع Prisma، تنفيذ الترحيلات، وبدء الخادم باستخدام Nodemon.
- `test`: تشغيل جميع الاختبارات باستخدام Mocha و Jest.

## إدارة الصور

وظائف مساعدة لحفظ وإنشاء روابط للصور:

- **`saveBase64Image`**: حفظ صورة Base64 إلى ملف على الخادم.
- **`getImageUrl`**: إنشاء رابط مؤقت للوصول إلى الصورة.
- **`extractMimeType`**: استخراج نوع MIME من صورة Base64.
- **`extractSize`**: حساب حجم صورة Base64.

## تحليل الصور باستخدام Google Generative AI

تستخدم الدالة **`checkMeasureValue`** Google Generative AI لتحليل صور القراءات واستخراج القيمة المعلنة.

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

تستخدم هذه الدالة لضمان استخراج قيمة القراءة بدقة من الصورة المقدمة.
## مشاريع أخرى



- 💎 [Delivery BackEnd](https://github.com/SamuelRocha91/delivery_back/blob/main/README_ar.md) 
- 🛒 [Consumy Application](https://github.com/SamuelRocha91/consumy/blob/main/README_ar.md) 
- 👨‍💼 [Seller Application](https://github.com/SamuelRocha91/seller_application/blob/main/README_ar.md) 
- 💲 [Paymenty API](https://github.com/SamuelRocha91/paymenty/blob/main/README_ar.md) 
