import { Router } from "express";
import { pool } from '../config/db.js';
import { getLibros, getDescripcion, getDetalles } from "../controllers/libro.controllers.js";

const router = Router();

// Ruta para obtener la lista de libros
router.get('/libros', getLibros);

// Ruta para obtener la descripción de un libro por ID
router.get('/libros/descripcion/:id_libro', getDescripcion);

// Ruta para obtener los detalles de un libro por ID
router.get('/libros/detalles/:id_libro', getDetalles);

export default router;
