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
git clone https://github.com/Nitishkumar8521/E-Commerce.git
cd E-Commerce
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

## 🔁 API Routes (Backend)

### 🔐 User Routes
| Method | Endpoint                | Description          |
|--------|-------------------------|----------------------|
| POST   | /api/user/register      |  Register a new user |
| POST   | /api/user/login         |  Login and get token |
| POST   | /api/user/admin         |  For admin           |

### 📝 Product Routes
| Method |    Endpoint         | Description         |
|--------|---------------------|---------------------|
| POST   | /api/product/add    | Create new product  |
| POST   | /api/product/remove | Delete a product    |
| POST   | /api/product/single | Get a single product|
| GET    | /api/product/list   | Get all the product |

### 📝 Order Routes
| Method |    Endpoint               |    Description         |
|--------|---------------------------|------------------------|
| POST   | /api/order/list           | Get all orders         |
| POST   | /api/order/status         | Get order staus        |
| POST   | /api/order/place          | Place the order        |
| POST   | /api/order/stripe         | Implement stripe       |
| POST   | /api/order/razorpay       | Implement razorpay     |
| POST   | /api/order/userorders     | Get a single user order|
| GET    | /api/order/verifyStripe   | Get all the product    |

### 🛒  cart Routes
| Method |    Endpoint       | Description         |
|--------|-------------------|---------------------|
| POST   | /api/cart/add     | Add product to cart |
| POST   | /api/cart/get     | Get the cart data   |
| POST   | /api/cart/update  | Update the cart     |

### 🌐Deployment

You can access the live project here:

[🔗Frontend Live Demo](https://e-commerce-7fj4.vercel.app/)
[🔗Admin panel Live Demo](https://forever-admin-nine-delta.vercel.app/)

### Future Enhancements

- Add razorpay payment gateway

- Improve accessibility features

### Author

Developed by **Nitish Kumar Singh.** Feel free to contribute or provide feedback!

