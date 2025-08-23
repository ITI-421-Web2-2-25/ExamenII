import { body, validationResult } from "express-validator";

export const validateComment = [
  body("CommentDetail")
    .isString().withMessage("CommentDetail debe ser texto")
    .isLength({ min: 1, max: 100 }).withMessage("CommentDetail debe tener entre 1 y 500 caracteres"),

  body("Valoration")
    .isNumeric().withMessage("Valoration debe ser numero")
    .isLength({ min: 1, max: 50 }).withMessage("Valoration debe ser entre 1 y 5"),

  // Middleware para manejar los errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    next();
  }
];