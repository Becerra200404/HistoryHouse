
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function main (){
    /* const newUser = await prisma.libro.create({
        data:{
            titulo: "Historia De Argentina",
            decripcion: "Historia epicarda de Argentina",
            numero_paginas: 20,
            objetivos: "Aprender Sobre la epicarda historia de Argentina",
            sinopsis: "Epicarda Historia de Argentina",
            fecha_publicacion: new Date(2004, 4 - 1, 2)
        }
    })
    console.log(newUser); */

    //Buscar y listar multiples datos
    /* const libros = await prisma.libro.findMany();
    console.log(libros);

    libros.map(libro => {
        console.log(`${libro.id} - ${libro.titulo}`)
    }) */


    //Buscar y listar único dato
   /* const libro = await prisma.libro.findFirst({
    where: {
        //id: 1
        OR: [
            {id: 2},
            {titulo: "Historia De Argentina"}
        ]
    }
   });

   console.log(libro); */

   //Eliminar Dato de la Tabla
   /* try {
    const libro = await prisma.libro.delete({
        where: {
            id: 6
        }
    });
    
    console.log(libro);

   } catch (error) {
    //console.log(error.message);
    if(error.code === "P2025"){
        console.log("Libro no encontrado");
    }
   } */
   
    //Actualizar dato 
    /* const libro = await prisma.libro.update({
        where:{
            id: 2
        },
        data: {
            numero_paginas: 50,
            sinopsis: "Epicorda Historia de Bolivia Mejorada"
        }
    });

    console.log(libro) */

    //Actualizar muchos datos
    /* const result = await prisma.libro.updateMany({
        where:{
            numero_paginas: 20
        },
        data: {
            numero_paginas: 50
        }
    });

    console.log(result) */

    //Eliminar muchos
    /* const result = await prisma.libro.deleteMany({
        where:{
            numero_paginas: 50
        }
    });

    console.log(result)

    const libros = await prisma.libro.findMany();
    console.log(libros)
 */

    //Con UPSERT buscamos un dato y si lo encuentra, lo actualiza, y si no crea 
    /* const libro = await prisma.libro.upsert({
        where:{
            id: 1
        },
        create:{
            id: 1,
            titulo: "Historia De Argentina",
            decripcion: "Historia epicarda de Argentina",
            numero_paginas: 20,
            objetivos: "Aprender Sobre la epicarda historia de Argentina",
            sinopsis: "Epicarda Historia de Argentina",
            fecha_publicacion: new Date(2004, 4 - 1, 2)
        },
        update:{
            titulo: "Historia De Bolivia",
            decripcion: "Historia epicarda de Bolivia",
            numero_paginas: 30,
            objetivos: "Aprender Sobre la epicarda historia de Bolivia",
            sinopsis: "Epicarda Historia de Bolivia",
            fecha_publicacion: new Date(2004, 4 - 1, 2)
        }
    });

    console.log(libro); */

    //Listar Datos asociados a otros datos
    /* const paises = await prisma.pais.findMany({
        include: {
            libros: true
        }
    });

    paises.map(pais => {
        console.log("--------------");
        console.log(`Nombre: ${pais.nombre}`);
        pais.libros.map(libro => {
            console.log(`   Titulo: ${libro.titulo}`);
        })
    })
    console.log(paises); */
}

main();
/*
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

*/