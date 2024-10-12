import express from "express";

import libroRoutes from '../routes/libro.routes.js';
const router = express.Router();


router.use('/libros', libroRoutes);

export default router;
