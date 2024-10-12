import { Link } from "react-router-dom"

import './Inicio.css'
import { useState, useEffect } from "react";
import { getBooks } from "../service/api";

const Home = () => {

  
  const [books, setBooks] = useState([]);

  console.log("Estos son los libros",books)

  useEffect(() => {
    obtenerLibros();
  }, [])

  const obtenerLibros = async () => {
    try {
      const response = await getBooks();
      console.log(response.data)
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>


        <Link className='menu-link' to="/Libro"><h1>ir  a los detalles</h1></Link>
        {
          books.map((ale) => (
            <div className="card" key = {ale.id_libro} style={{ backgroundImage: "url('/assets/img.jpg')" }}>
            <img className="img" src={ale.portada_libro} height={'200px'} width={'150px'}></img>
              <div className="textos">
                <Link className='menu-link' to="/Libro"><h3>ir  a los detalles</h3></Link>
               <p>{ale.titulo_libro}</p>
            </div>
          </div>

          ))
        }

    </div>
  )
}

export default Home
