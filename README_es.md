# <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Full Stack Projects" width="52" height="40" /> API de medición de cuentas de gas y agua <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Java Projects Logo" width="52" height="40" />  

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ar.md)

Esta es una API desarrollada para gestionar mediciones de clientes en diferentes tipos de servicios. La aplicación utiliza Node.js, TypeScript, Prisma, Express.js y otras tecnologías para ofrecer un backend robusto y escalable.

## FrontEnd
- 📏 [React Precision Application](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md) 


![Ejecutando el backend con docker](./src/gifs/apiMeasure.gif)
![Solicitud post para crear un cliente](./src/images/postCustomer.png)



## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el backend.
- **TypeScript**: Superconjunto de JavaScript que agrega tipado estático al código.
- **Express.js**: Framework web minimalista para Node.js.
- **Prisma**: ORM que facilita el acceso a la base de datos.
- **Mysql**: Base de datos utilizada durante el desarrollo.
- **ESLint**: Herramienta de linting para mantener el código limpio y estandarizado.
- **Jest**: Framework de pruebas utilizado para asegurar la calidad del código.
- **Mocha**: Utilizado para pruebas adicionales.
- **Google Generative AI**: Integrado para analizar imágenes de medidores y extraer valores numéricos de las mediciones.
- **Swagger**: Integrado para generar una documentación para las rutas.

## Estructura del Proyecto

El proyecto sigue una estructura modular para facilitar el mantenimiento y la escalabilidad. Las principales carpetas y archivos son:

- `src/`: Contiene el código fuente de la aplicación.
  - `controllers/`: Lógica de control, donde se procesan las solicitudes.
  - `db/`: Genera una instancia prisma para la conexión con la base de datos en toda la aplicación.
  - `exceptions/`: Crea excepciones personalizadas para manejar errores durante la ejecución de la aplicación.
  - `ìnterfaces/`: Crea interfaces y tipos para manejar parámetros y retornos de funciones.
  - `middlewares/`: Middlewares para validaciones y tratamientos.
  - `models/`: Lógica de conexión con la base de datos.
  - `services/`: Capa de servicios que interactúa con Prisma y realiza operaciones de negocio.
  - `routes/`: Definición de las rutas de la API.
  - `utils/`: Funciones utilitarias, como la manipulación de imágenes y la interacción con la API de Google Generative AI.
  - `tests/`: Pruebas automatizadas para validar las funcionalidades.

## Funcionalidades

- **Listar Mediciones**: Permite listar todas las mediciones de un cliente específico, filtrando por tipo de medición.
- **Gestión de Imágenes**: Las imágenes de las mediciones se guardan y se recuperan a través de URLs temporales, utilizando Base64.
- **Validación de Parámetros**: Middleware para validar los parámetros de entrada, garantizando la integridad de las solicitudes.
- **Análisis de Imágenes con Google Generative AI**: La API analiza imágenes de mediciones y extrae el valor de consumo mostrado.

## Cómo Ejecutar el Proyecto

### Requisitos

- Node.js
- Docker (opcional para el entorno de desarrollo)

### Instalación

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/seu-usuario/apiShopper.git
    cd apiMeasureWaterAndGas
    ```

2. Instalar las dependencias:
    ```bash
    npm install
    ```

3. Configurar las variables de entorno:
    - Crear un archivo `.env` con las configuraciones necesarias.
    - Ejemplo:
      ```env
      DATABASE_URL="file:./dev.db"
      GEMINI_API_KEY="tu_clave_api_google"
      HOST="http://localhost:3000"
      ```

4. Ejecutar las migraciones de la base de datos:
    ```bash
    npx prisma migrate dev
    ```

5. Iniciar el servidor:
    ```bash
    npm run dev
    ```

### Docker

Puedes ejecutar el proyecto utilizando Docker. Para ello, ejecuta:

```bash
docker-compose up --build
```

## Pruebas

Las pruebas se ejecutan con Jest y Mocha. Para ejecutar todas las pruebas:

```bash
npm run test
```

## Contribución

Siéntete libre de abrir issues o enviar pull requests. ¡Toda contribución es bienvenida!

## Scripts Disponibles

- `start`: Inicia la aplicación.
- `dev`: Inicia la aplicación en modo de desarrollo.
- `build`: Compila el código TypeScript a JavaScript.
- `lint`: Ejecuta ESLint para verificar la conformidad del código.
- `lint:fix`: Ejecuta ESLint y corrige problemas automáticamente.
- `prisma:generate`: Genera los tipos de Prisma.
- `prisma:migrate`: Ejecuta migraciones de la base de datos.
- `prisma:seed`: Población inicial de la base de datos con datos de prueba.
- `docker`: Instala las dependencias, genera los tipos de Prisma, ejecuta migraciones e inicia el servidor utilizando Nodemon.
- `test`: Ejecuta todas las pruebas utilizando Mocha y Jest.

## Configuración de Imágenes

Funciones utilitarias para guardar y generar URLs para imágenes:

- **`saveBase64Image`**: Guarda una imagen Base64 en un archivo en el servidor.
- **`getImageUrl`**: Genera una URL temporal para acceder a la imagen.
- **`extractMimeType`**: Extrae el tipo MIME de una imagen Base64.
- **`extractSize`**: Calcula el tamaño de una imagen Base64.

## Análisis de Imágenes con Google Generative AI

La función **`checkMeasureValue`** utiliza Google Generative AI para analizar imágenes de mediciones y extraer el valor de consumo.

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

Esta función se usa para asegurar que el valor de la medición sea extraído con precisión a partir de la imagen proporcionada.

## Otros Proyectos

- 💎 [Delivery BackEnd](https://github.com/SamuelRocha91/delivery_back) 
- 🛒 [Consumy Application](https://github.com/SamuelRocha91/consumy) 
- 👨‍💼 [Seller Application](https://github.com/SamuelRocha91/seller_application) 
- 💲 [Paymenty API](https://github.com/SamuelRocha91/paymenty) 
