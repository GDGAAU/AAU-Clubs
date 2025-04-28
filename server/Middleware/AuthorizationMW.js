const jwt = require("jsonwebtoken");
require("dotenv").config();

function authorizeUser() {
  return (req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ error: "Empty token" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== "user") {
        return res.status(403).json({ error: "Access Denied" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ error: "Unknown User, Possible Tampering" });
    }
  };
}

function authorizeAdmin() {
  return (req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ error: "Empty token" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== "admin") {
        return res.status(403).json({ error: "Access Denied" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ error: "Unknown User, Possible Tampering" });
    }
  };
}

function authorizeSuperAdmin() {
  return (req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ error: "Empty token" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== "superadmin") {
        return res.status(403).json({ error: "Access Denied" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ error: "Unknown User, Possible Tampering" });
    }
  };
}

module.exports = authorize;
