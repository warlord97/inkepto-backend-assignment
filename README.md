# Mini Backend Assignment (Node.js + MongoDB)

A simple yet production‑grade backend service built with **Node.js**, **Express**, **MongoDB Atlas**, and **JWT authentication**. The project includes user registration, login, and a protected route to fetch user details.

---

## 🚀 Tech Stack

- **Node.js** (Express)
- **MongoDB Atlas**
- **JWT Authentication**
- **Bcrypt Password Hashing**
- **Swagger (OpenAPI 3.0)** for API documentation

---

## 📌 Features

- User Registration (with password hashing)
- User Login (with JWT token generation)
- Protected API (Get logged‑in user details)
- Input Validation
- Error Handling
- Separate Swagger documentation
- Clean project structure
- Deployed on Render / Railway (URL to be added)

---

## 📁 Folder Structure

```
project/
│── server.js
│── package.json
│── .env (ignored)
│── swagger/
│     └── swagger.yaml
└── models/
│     └── User.js
└── routes/
│     └── auth.routes.js
│     └── user.routes.js
└── middleware/
      └── auth.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/warlord97/inkepto-backend-assignment.git
cd inkepto-backend-assignment
```

### 2. Install Dependencies

```
npm install
```

### 3. Create `.env` File

```
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key
PORT=5000
JWT_EXPIRES_IN=1h
```

### 4. Start the Server

```
node server.js
```

Server will run on:

```
https://inkepto-backend-assignment.onrender.com
```

---

## 🧪 API Endpoints

### **1. Register User**

**POST** `/api/register`

Request Body:

```
{
  "email": "test@example.com",
  "password": "Test@123",
  "firstName": "John",
  "lastName": "Doe"
}
```

Response:

```
{ "message": "User registered successfully" }
```

---

### **2. Login User**

**POST** `/api/login`

Request Body:

```
{
  "email": "test@example.com",
  "password": "Test@123"
}
```

Response:

```
{
  "token": "<jwt-token>"
}
```

---

### **3. Get Logged‑In User**

**GET** `/api/user`

Headers:

```
Authorization: Bearer <token>
```

Response:

```
{
  "email": "test@example.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

---

## 📘 API Documentation (Swagger)

Swagger UI available at:

```
https://inkepto-backend-assignment.onrender.com/api-docs
```

Swagger file location:

```
swagger/swagger.yaml
```

---

## 🛠 Deployment

This project can be deployed easily on:

- **Render**
- **Railway**
- **Vercel (Serverless)**
- **AWS / Azure / GCP**

Add environment variables in deployment platform:

```
MONGO_URI
JWT_SECRET
PORT
JWT_EXPIRES_IN
```

---

---

## 🧪 Postman Collection
Your can find the complete Postman API collection here:

[Download Postman Collection](./postman_collection.json)

---

## 👨‍💻 Author

**Shubham Yadav**
Backend Developer (Node.js + MongoDB)

---

## ⭐ Feedback

If you're reviewing this assignment, feedback is highly appreciated!
