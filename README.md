# 🛒 E-Commerce Web App
A full-stack E-Commerce application with a modern responsive frontend, secure backend, and a separate Admin Panel for managing products, orders, and users.

## 📦 Tech Stack
### 🚀 Frontend
- React 

- Chakra UI – for responsive and customizable UI

- React Router DOM v7 – for routing

- Axios – for API requests

- React Toastify – for toast notifications

- Framer Motion – for animations

### 🛠 Backend
- Express.js v5 – for API server

- MongoDB & Mongoose – for database and ODM

- JWT (jsonwebtoken) – for authentication

- Bcrypt – for password hashing

- Multer – for file uploads

- Cloudinary – for image hosting

- Stripe – for payment gateway

- CORS, Dotenv, Validator, Nodemon

## 📁 Project Structure
```bash
📦E-Commerce/
├-- 📁admin (React + Chakra UI)
│ ├── public/
│ └── src/
|    |- Components/
|    |          |- Login.jsx
|    |          |- Navbar.jsx
|    |          |- Sidebar.jsx
|    |- pages/
|    |      |- Add.jsx
|    |      |- List.jsx
|    |      |- Orders.jsx
|    |- App.jsx
|    |- main.jsx
|
├-- 📁backend/ # Backend (Node.js + Express + MongoDB)
|          |- controllers
|          |           |- cartController.js
|          |           |- orderController.js
|          |           |- productController.js
|          |           |- userController.js
│          |- models/
|          |       |- orderModel.js
|          |       |- productModel.js
|          |       |- userModel.js
│          |- routes/
|          |       |- cartRoute.js
|          |       |- orderRoute.js
|          |       |- productRoute.js
|          |       |- userRoute.js
│          |- middleware/
|          |          |- adminAuth.js
|          |          |- auth.js
|          |          |- multer.js
|          |- .env
|          |- index.js
|          |- package.json
|          |- README.md
|
|-- 📁frontend (React + Chakra UI)
|           |- public/
|           |- src/
|           |    |- assets/
|           |    |- components/
|           |    |- context/
|           |    |- pages/
|           |    |- App.jsx
|           |    |- main.jsx  
```

## 🔐 Features
### ✅ User Features
- User Registration & Login (JWT-based)

- View products by categories

- Filter products by low-to-high and high-to-low

- Add to cart 

- Checkout using Stripe

- Shop by Searching products

### 🛠 Admin Panel
- Secure Admin Login

- Create, Update, Delete products

- Update the order status

- View all orders

- Upload images (Cloudinary)

## 🚀 Getting Started
### 🔧 Prerequisites
- Node.js ≥ 18.x

- MongoDB Atlas or local MongoDB

- Cloudinary Account

- Stripe Account

## 🔨 Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
```
### 2. Setup Backend
```bash
cd server
npm install
npm run server
```
### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```
## 🔒 Authentication & Authorization
- JWT stored in local storage

- Protected routes for user and admin

- Middleware for verifying user roles


