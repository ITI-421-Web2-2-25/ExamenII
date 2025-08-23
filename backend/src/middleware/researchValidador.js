import { body, validationResult } from "express-validator";

export const validateresearch = [
  body("researchID")
    .isString().withMessage("researchID debe ser texto")
    .isLength({ min: 1, max: 20 }).withMessage("researchID debe tener entre 1 y 20 caracteres"),

  body("Fullname")
    .isString().withMessage("Fullname debe ser texto")
    .isLength({ min: 1, max: 50 }).withMessage(" Fullname debe tener entre 1 y 50 caracteres"),

  body("schoolgrade")
    .isString().withMessage("schoolgrade debe ser texto")
    .isLength({ min: 1, max: 50 }).withMessage("schoolgrade debe tener entre 1 y 50 caracteres"),

  body("password")
    .isString().withMessage("password debe ser texto")
    .isLength({ min: 1, max: 50 }).withMessage("password debe tener entre 1 y 50 caracteres"),

  body("Description")
    .optional()
    .isString().withMessage("Description debe ser texto")
    .isLength({ max: 200 }).withMessage("Description no puede exceder 200 caracteres"),

  body("Mime")
    .optional()
    .isIn(["image/png", "image/jpeg", "image/jpg", "image/gif"])
    .withMessage("Mime debe ser un tipo de imagen válido"),

  // Middleware para manejar los errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    next();
  }
];