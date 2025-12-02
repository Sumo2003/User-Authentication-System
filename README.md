
🔐 User Authentication System

A secure and modular User Authentication System built using Node.js, Express, JWT, and bcrypt.
It provides user signup, login, password hashing, token-based authentication, and protected routes — implemented using clean architecture and industry best-practice security standards.

✨ Features

🔑 User Registration & Login

🛡️ Password Hashing using bcrypt

🔐 JWT Token Generation & Verification

🚧 Protected API Routes with Authentication Middleware

📁 Modular Folder Structure (Models, Routes, Middleware)

⚠️ Environment Variable Support using .env

🔌 MongoDB Integration

📂 Folder Structure
User-Authentication-System/
│── routes/
│   ├── auth.js
│   ├── middleware/
│   └── models/
│
│── server.js
│── package.json
│── package-lock.json
│── .gitignore
│── example.env

🛠️ Tech Stack

Node.js

Express.js

JWT (JSON Web Tokens)

bcrypt.js

MongoDB 

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/YOUR_USERNAME/User-Authentication-System.git

2️⃣ Install Dependencies
npm install

3️⃣ Create a .env File

Use this template:

JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection

4️⃣ Start the Server
node server.js


Server will run at:
👉 http://localhost:5000

📡 API Endpoints
➤ Register User

POST /register
Body:

{
  "name": "Sumaira",
  "email": "sumaira@example.com",
  "password": "123456"
}

➤ Login User

POST /login
✔ Returns JWT token if credentials are valid.

➤ Protected Route

GET /protected-route
✔ Accessible only with a valid JWT token in headers.

🔒 Security Notes

.env file is never uploaded to GitHub

Passwords are securely hashed using bcrypt

JWT tokens ensure stateless & secure authentication

Sensitive data stays protected
