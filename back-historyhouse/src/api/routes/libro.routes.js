import { Router } from "express";
import { pool } from '../db.js'
import { getLibros, getDescripcion, getDetalles } from "../controllers/libro.controllers.js";

const router = Router()

//para el HOME 
router.get('/libros', getLibros);

//para el apartado Descripcion
router.get('/libros/descripcion/:id_libro', getDescripcion);

//para el apartado Detalles
router.get('/libros/detalles/:id_libro', getDetalles);

export default router;