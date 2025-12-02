
🔐 User Authentication System
A secure and modular User Authentication System built using Node.js, Express, JWT, and bcrypt.
This project provides user signup, login, password hashing, token-based authentication, and protected routes — designed with scalable architecture and security best practices.

🚀 Features
🔑 User Registration & Login
🔒 Password Hashing (bcrypt)
🎫 JWT Token Generation & Verification
🛡️ Protected Routes (Auth Middleware)
📁 Modular Folder Structure
🧩 Models, Middlewares, and Routes Separation
⚠️ Environment Variable Support (.env) for Secrets

🗂️ Folder Structure
User-Authentication-System/
│
├── routes/
│    ├── auth.js
│    ├── middleware/
│    └── models/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── example.env

🛠️ Tech Stack
Node.js
Express.js
JWT (JSON Web Tokens)
bcrypt.js
MongoDB

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/User-Authentication-System.git
2️⃣ Install dependencies
npm install
3️⃣ Create a .env file
Create your own .env using example.env as reference:
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection
4️⃣ Run the server
node server.js
Server will start at:
http://localhost:5000
🔄 API Endpoints
🔹 POST /register
Registers a new user
Body example:
json
{
"name": "Sumaira",
  "email": "sumaira@example.com",
  "password": "123456"
}
🔹 POST /login
Returns JWT token if credentials are valid

🔹 GET /protected-route
Accessible only if valid JWT token is sent in headers.

⚠️ Security Notes
.env file is never uploaded (contains sensitive secrets)
Passwords are fully encrypted using bcrypt
JWT tokens provide secure session handling

📝 License
This project is proprietary and for viewing purposes only.
Unauthorized copying, distribution, or use of this code is strictly prohibited.
© 2025 Sumaira
