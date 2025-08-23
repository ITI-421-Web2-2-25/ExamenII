import express from 'express';
import multer from 'multer';
import { createInvestigation, getInvestigation } from '../controllers/investigationController.js';
import { validateInvestigation } from '../middleware/investigationValidator.js';

const router = express.Router();

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 } // máximo 5MB por archivo
}); 

router.post('/', upload.single('Document'), validateInvestigation, createInvestigation);
router.get('/', getInvestigation);

export default router;