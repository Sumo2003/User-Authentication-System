const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const authRouter = require("./routes/auth"); // ✅ Correct path
const verifytokenTEMP = require("./routes/middleware/verifytokenTEMP"); // ✅ Correct path

const app = express();
const PORT = process.env.PORT || 5000;

// --- MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- STATIC FILES ---
app.use(express.static(path.join(__dirname, "routes", "models", "public")));

// --- MONGODB CONNECTION ---
const MONGO_URI =
  "mongodb+srv://ashfaquesumaira7_db_user:iquMpZCwDVy7V7MQ@cluster0.clkpyh1.mongodb.net/AuthDB?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Atlas Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// --- ROUTES: AUTH API ---
app.use("/api/auth", authRouter);

// --- ROOT ROUTE (HOME PAGE) ---
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "routes", "models", "public", "index.html")
  );
});

// --- DASHBOARD ROUTE (Protected using verifytokenTEMP) ---
app.get("/dashboard", verifytokenTEMP, (req, res) => {
  res.sendFile(
    path.join(__dirname, "routes", "models", "public", "dashboard.html")
  );
});

// --- START SERVER ---
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
