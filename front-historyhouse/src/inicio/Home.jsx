import { Link, useNavigate } from "react-router-dom"

import './Inicio.css'
import { useState, useEffect } from "react";
import { getBooks } from "../service/api";

const Home = () => {
  
  
  const [books, setBooks] = useState([]);
  const navigate = useNavigate(); 

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
  };

  const irADetalles = (id) => {
    navigate(`/Libro/${id}`);
  };


  return (
    
    <div>
        <Link className='menu-link' to="/Libro"><h1>ir  a los detalles</h1></Link>
        {
          books.map((book) => (
            <div className="card" key = {book.id_libro} style={{ backgroundImage: "url('/assets/img.jpg')" }}>
            <img className="img" src={book.portada_libro} height={'200px'} width={'150px'}></img>
              <div className="textos">
                <button className='menu-link' onClick={() => irADetalles(book.id_libro)}>
                  <h3>Ir a los detalles</h3>
                </button>
               <p>{book.titulo_libro}</p>
            </div>
          </div>

          ))
        }

    </div>
  )
}

export default Home
