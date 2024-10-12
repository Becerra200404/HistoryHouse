import { Link } from "react-router-dom"
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
            <div key = {ale.id_libro}>
            <img className="img" src={ale.portada_libro} height={'200px'} width={'150px'}></img>
              {ale.titulo_libro}
            </div>
          ))
        }
    </div>
  )
}

export default Home
