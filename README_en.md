# Water and Gas Billing Measurement API

<h2>🌐</h2>
<ul>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README.md" target="_blank">Portuguese</a></li>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_es.md" target="_blank">Spanish</a></li>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_en.md" target="_blank">English</a></li>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ru.md" target="_blank">Russian</a></li>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ch.md" target="_blank">Chinese</a></li>
  <li><a href="https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ar.md" target="_blank">Arabic</a></li>
</ul>

This API is developed to manage customer measurements across different types of services. The application uses Node.js, TypeScript, Prisma, Express.js, and other technologies to offer a robust and scalable backend.

![Status: In Development](https://img.shields.io/badge/status-in%20development-yellow)

<a href="https://github.com/SamuelRocha91/precisionReactApplication" target="_blank">Measurement Application React Frontend</a>


![Running backend with Docker](./src/gifs/apiMeasure.gif)
![Post request to create customer](./src/images/postCustomer.png)



## Technologies Used

- **Node.js**: JavaScript runtime environment for the backend.
- **TypeScript**: A superset of JavaScript that adds static typing to the code.
- **Express.js**: A minimalist web framework for Node.js.
- **Prisma**: ORM that simplifies database access.
- **Mysql**: Database used during development.
- **ESLint**: Linting tool to keep the code clean and standardized.
- **Jest**: Testing framework used to ensure code quality.
- **Mocha**: Used for additional tests.
- **Google Generative AI**: Integrated to analyze meter images and extract numerical values from measurements.
- **Swagger**: Integrated to generate documentation for the routes.


## Project Structure

The project follows a modular structure to facilitate maintenance and scalability. The main folders and files are:

- `src/`: Contains the application source code.
  - `controllers/`: Control logic where requests are processed.
  - `db/`: Generates a Prisma instance for database connection across the application.
  - `exceptions/`: Custom exceptions to handle errors during application execution.
  - `interfaces/`: Creates interfaces and types to handle function parameters and returns.
  - `middlewares/`: Middlewares for validations and treatments.
  - `models/`: Database connection logic.
  - `services/`: Service layer interacting with Prisma and handling business operations.
  - `routes/`: API route definitions.
  - `utils/`: Utility functions, such as image manipulation and interaction with the Google Generative AI API.
  - `tests/`: Automated tests to validate functionalities.

## Features

- **List Measurements**: Allows listing all measurements of a specific customer, filtering by measurement type.
- **Image Management**: Measurement images are saved and retrieved through temporary URLs, using Base64.
- **Parameter Validation**: Middleware to validate input parameters, ensuring request integrity.
- **Image Analysis with Google Generative AI**: The API analyzes meter images and extracts the displayed consumption value.

## How to Run the Project

### Requirements

- Node.js
- Docker (optional for development environment)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/apiShopper.git
    cd apiMeasureWaterAndGas
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    - Create a `.env` file with the necessary settings.
    - Example:
      ```env
      DATABASE_URL="file:./dev.db"
      GEMINI_API_KEY="your_google_api_key"
      HOST="http://localhost:3000"
      ```

4. Run database migrations:
    ```bash
    npx prisma migrate dev
    ```

5. Start the server:
    ```bash
    npm run dev
    ```

### Docker

You can run the project using Docker. To do this, run:

```bash
docker-compose up --build
```

## Tests

Tests are run with Jest and Mocha. To run all tests:

```bash
npm run test
```

## Contribution

Feel free to open issues or submit pull requests. All contributions are welcome!

## Available Scripts

- `start`: Starts the application.
- `dev`: Starts the application in development mode.
- `build`: Compiles TypeScript code to JavaScript.
- `lint`: Runs ESLint to check code compliance.
- `lint:fix`: Runs ESLint and automatically fixes issues.
- `prisma:generate`: Generates Prisma types.
- `prisma:migrate`: Runs database migrations.
- `prisma:seed`: Seeds the database with initial data.
- `docker`: Installs dependencies, generates Prisma types, runs migrations, and starts the server using Nodemon.
- `test`: Runs all tests using Mocha and Jest.

## Image Configuration

Utility functions to save and generate URLs for images:

- **`saveBase64Image`**: Saves a Base64 image to a file on the server.
- **`getImageUrl`**: Generates a temporary URL to access the image.
- **`extractMimeType`**: Extracts the MIME type from a Base64 image.
- **`extractSize`**: Calculates the size of a Base64 image.

## Image Analysis with Google Generative AI

The **`checkMeasureValue`** function uses Google Generative AI to analyze meter images and extract the consumption value.

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

This function is used to ensure that the measurement value is accurately extracted from the provided image.