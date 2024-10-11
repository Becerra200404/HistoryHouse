import { Router } from "express";
import { pool } from '../db.js'

const router = Router()

//para el HOME 
router.get('/libros', async (req, res) => {
    const { rows } = await pool.query('SELECT titulo_libro FROM libro')
    //aquí sería obtener los links de las portadas osea portada_libro pero aún no hay
    res.json(rows);
})

//para el apartado Descripcion
router.get('/libros/descripcion/:id_libro', async (req, res) => {
    const { id_libro } = req.params;
    const { rows } = await pool.query('SELECT sinopsis_libro,objetivos_libro FROM libro WHERE id_libro = $1', [id_libro])
    res.json(rows);
})

//para el apartado Detalles
router.get('/libros/detalles/:id_libro', async (req, res) => {
    const { id_libro } = req.params;

    //corregir COnsulta!!!
    const { rows } = await pool.query('SELECT nombre_autor,nombre_editorial,numero_paginas,fecha_publicacion,id_categoria  FROM libro WHERE ... id_libro = $1', [id_libro])
    res.json(rows);
})

export default router;