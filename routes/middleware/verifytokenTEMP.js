// routes/middleware/verifytokenTEMP.js
// routes/middleware/verifytokenTEMP.js
// routes/middleware/verifytokenTEMP.js
// routes/middleware/verifytokenTEMP.js
const jwt = require("jsonwebtoken");

function verifytokenTEMP(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Access denied. Token missing." });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, "secretKey123");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
}

module.exports = verifytokenTEMP;
