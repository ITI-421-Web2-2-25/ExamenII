import express from 'express';
import multer from 'multer';
import { createresearch, getresearch } from '../controllers/researchController.js';
import { validateresearch } from '../middleware/researchValidador.js';

const router = express.Router();

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 } // máximo 5MB por archivo
}); 

router.post('/', upload.single('Image'), validateresearch, createresearch);
router.get('/', getresearch);

export default router;