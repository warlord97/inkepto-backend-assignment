import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mini Backend API Documentation",
      version: "1.0.0",
      description:
        "API documentation for the Node.js + MongoDB internship assignment",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local Server",
      },
    ],
  },

  // scans routes for JSDoc comments
  apis: ["./routes/*.js"],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
