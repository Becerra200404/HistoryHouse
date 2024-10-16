import { Link, useNavigate } from "react-router-dom"

import './Inicio.css'
import { useState, useEffect } from "react";
import { getBooks } from "../service/api";

const Home = () => {
  
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  console.log("Estos son los libros", books)

  useEffect(() => {
    obtenerLibros();
  }, [])

  const obtenerLibros = async () => {
    try {
      const response = await getBooks();
      if (response.status !== 200) {
        throw new Error('Error en la carga de datos');
      }
      console.log(response.data)
      setBooks(response.data);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Finalizar carga
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (    
    <div>
      <div className="contenedor-logo container">
          <h1 style={{textAlign: "center"}}>LOGO</h1>
      </div>
      <div className="contenedor-conciertos container">
        {
          books.map((ale) => (
            <div className="card" key={ale.id_libro} >
              <img className="img" src={ale.portada_libro} height={'200px'} width={'150px'}></img>
              <div className="textos">
              <Link className='menu-link' to={`/Libro/${ale.id_libro}`} onClick={() => irADetalles(ale.id_libro)}>{ale.titulo_libro}</Link>
                
              </div>
            </div>
            
          ))
        }
      </div>
    </div>
  )
}

export default Home
