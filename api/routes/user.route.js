import express from 'express';
import { testRouter } from '../controller/user.controller.js';

const router = express.Router();

router.get('/test', testRouter)

export default router;