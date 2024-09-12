import express from 'express';
import { validateSIN } from '../controllers/sinValidationController';

const router = express.Router();

router.post('/validate', validateSIN);

export default router;