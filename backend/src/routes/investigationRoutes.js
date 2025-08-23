import express from 'express';
import multer from 'multer';
import { createInvestigation, getInvestigation, addComment, addImage } from '../controllers/investigationController.js';
import { validateInvestigation } from '../middleware/investigationValidator.js';
import { validateComment } from '../middleware/commentValidator.js';

const router = express.Router();

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 } // máximo 5MB por archivo
}); 

router.post('/', upload.single('Document'), validateInvestigation, createInvestigation);
router.post('/:id/addComment', validateComment, addComment);
router.post('/:id/addImage', upload.single('Image'), addImage);
router.get('/', getInvestigation);

export default router;