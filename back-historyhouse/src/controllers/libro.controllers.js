import { pool } from '../config/db.js'

export const getLibros = async (req, res) => {
    const { rows } = await pool.query('SELECT titulo_libro, portada_libro, id_libro FROM libro')
    //aquí sería obtener los links de las portadas osea portada_libro pero aún no hay
    res.json(rows);
};

export const getDescripcion = async (req, res) => {
    const { id_libro } = req.params;
    const { rows } = await pool.query('SELECT sinopsis_libro,objetivos_libro FROM libro WHERE id_libro = $1', [id_libro])
    
    if (rows.length === 0){
        return res.status(404).json({message: "Libro no encontrado" });
    }
    
    res.json(rows);
};

export const getDetalles = async (req, res) => {
    const { id_libro } = req.params;

    //corregir COnsulta!!!
    const { rows } = await pool.query('SELECT nombre_autor,nombre_editorial,numero_paginas,fecha_publicacion FROM libro,autor,editorial,categoria,libro_categoria WHERE libro.id_autor = autor.id_autor and libro.id_editorial = editorial.id_editorial and libro.id_libro = libro_categoria.id_libro and categoria.id_categoria = libro_categoria.id_categoria and libro.id_libro = $1', [id_libro])
    
    if (rows.length === 0){
        return res.status(404).json({message: "Libro no encontrado" });
    }
    
    res.json(rows);
};

export const getTitulo = async (req, res) => {
    const { id_libro } = req.params;

    //corregir COnsulta!!!
    const { rows } = await pool.query('SELECT titulo_libro, portada_libro FROM libro WHERE libro.id_libro = $1', [id_libro])
    
    if (rows.length === 0){
        return res.status(404).json({message: "Libro no encontrado" });
    }
    
    res.json(rows);
};

export const getCategorias = async (req, res) => {
    const { id_libro } = req.params;

    //corregir COnsulta!!!
    const { rows } = await pool.query(
    'SELECT nombre_categoria FROM categoria, (SELECT id_categoria FROM libro_categoria WHERE id_libro = $1) uno WHERE uno.id_categoria = categoria.id_categoria', [id_libro])
    if (rows.length === 0){
        return res.status(404).json({message: "Categorias no encontradas" });
    }
    
    res.json(rows);
};

export const getResumen = async (req, res) => {
    const { id_libro } = req.params;

    //corregir COnsulta!!!
    const { rows } = await pool.query('SELECT resumen_libro FROM libro WHERE libro.id_libro = $1', [id_libro])
    
    if (rows.length === 0){
        return res.status(404).json({message: "Resumen no encontrado" });
    }
    
    res.json(rows);
};