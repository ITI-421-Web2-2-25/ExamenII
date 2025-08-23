import { body, validationResult } from "express-validator";

export const validateInvestigation = [
  body("InvestigationID")
    .isString().withMessage("InvestigationID debe ser texto")
    .isLength({ min: 1, max: 20 }).withMessage("InvestigationID debe tener entre 1 y 20 caracteres"),

  body("InvestigationTitle")
    .isString().withMessage("CategoryName debe ser texto")
    .isLength({ min: 1, max: 50 }).withMessage("CategoryName debe tener entre 1 y 50 caracteres"),

  body("Area")
    .isString().withMessage("Area debe ser texto")
    .isLength({ min: 1, max: 50 }).withMessage("Area debe tener entre 1 y 50 caracteres"),

  body("Description")
    .optional()
    .isString().withMessage("Description debe ser texto")
    .isLength({ max: 500 }).withMessage("Description no puede exceder 200 caracteres"),

  body("DocumentMime")
    .optional()
    .isIn(["application/pdf"])
    .withMessage("Mime debe ser un documento PDF"),

  body("Conclusions")
    .optional()
    .isString().withMessage("Conclusions debe ser texto")
    .isLength({ max: 500 }).withMessage("Conclusions no puede exceder 500 caracteres"),

  body("Recommendations")
    .optional()
    .isString().withMessage("Recommendations debe ser texto")
    .isLength({ max: 500 }).withMessage("Recommendations no puede exceder 500 caracteres"),

  // Middleware para manejar los errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    next();
  }
];