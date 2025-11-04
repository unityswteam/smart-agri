import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Middleware to verify JWT token
export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");

    // Attach user info to request
    req.user = decoded;

    // Optional: fetch full user from DB
    const user = await User.findById(decoded.id).populate("role", "role_name");
    if (!user) return res.status(401).json({ message: "User not found" });

    req.userDetails = user; // full user document
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token", error: error.message });
  }
};

// Middleware to check user roles (RBAC)
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.userDetails) {
      return res.status(403).json({ message: "User details not found. Authorization failed." });
    }

    if (!allowedRoles.includes(req.userDetails.role.role_name)) {
      return res.status(403).json({ message: "Access denied. Insufficient permissions." });
    }

    next();
  };
};
