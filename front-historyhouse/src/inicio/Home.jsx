import { Link } from "react-router-dom"

import './Inicio.css'
import { useState, useEffect } from "react";
import { getBooks } from "../service/api";

const Home = () => {


  const [books, setBooks] = useState([]);

  console.log("Estos son los libros", books)

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

      <div className="contenedor-conciertos">
        {
          books.map((ale) => (
            <div className="card" key={ale.id_libro} >
              <img className="img" src={ale.portada_libro} height={'200px'} width={'150px'}></img>
              <div className="textos">
                <Link className='menu-link' to="/Libro/${id}"><p>{ale.titulo_libro}</p></Link>
                
              </div>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Home
