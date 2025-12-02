# 🔐 User Authentication System

A secure and modular authentication system built using **Node.js, Express, JWT, and bcrypt**.  
It provides secure user registration, login, password hashing, token-based authentication, and protected routes.

---

## ✨ Features

- 🔑 **User Registration & Login**
- 🛡️ **Password Hashing (bcrypt)**
- 🔐 **JWT Token Generation & Verification**
- 🚧 **Protected Routes (Auth Middleware)**
- 📁 **Modular Folder Structure** (Models, Routes, Middleware)
- ⚠️ **Environment Variable Support (.env)**
- 🗄️ **MongoDB Integration (optional)**

---

## 📂 Folder Structure

User-Authentication-System/
│── routes/
│ ├── auth.js
│ ├── middleware/
│ └── models/
│
│── server.js
│── package.json
│── package-lock.json
│── .gitignore
│── example.env


---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- JWT (JSON Web Tokens)  
- bcrypt.js  
- MongoDB (Optional)  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/User-Authentication-System.git

2️⃣ Install Dependencies
npm install

3️⃣ Create .env
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_url

4️⃣ Start Server
node server.js


Server will run at:
👉 http://localhost:5000

📡 API Endpoints
➤ Register User
POST /register

{
  "name": "Sumaira",
  "email": "sumaira@example.com",
  "password": "123456"
}

➤ Login User
POST /login

➤ Protected Route
GET /protected-route


Accessible only with valid JWT token.

🔒 Security Notes

.env file is never uploaded

Passwords are encrypted using bcrypt

JWT ensures secure, stateless authentication

📜 License

This project is proprietary & protected.
Unauthorized copying, distribution, or modification is strictly prohibited.
© 2025 Sumaira





