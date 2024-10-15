import { useEffect, useState } from "react"
import Descripcion from "./Descripcion";
import Detalles from "./Detalles";
import Resumen from "./Resumen";
import { useNavigate, useParams } from 'react-router-dom'
import './Libro.css'
import { getBookByID, getDetailsByID, getCategorysByID, getDescriptionsByID, getSummaryByID } from "../service/api";






const Libro = () => {

  const { id } = useParams(); // Obtén el ID del libro de la URL
  const [book, setBook] = useState(null);
  const [details, setDetails] = useState(null);
  const [categorys, setcategorys] = useState([]);
  const [descriptions, setDescriptions] = useState(null);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  //aqui esta  el estado de  las  pantallas 
  const navegacion = useNavigate();
  const [cambio, setCambio] = useState('DETALLES');

  useEffect(() => {
    const obtenerDatos = async () => {
      setLoading(true); // Iniciar carga
      try {
          const [bookResponse, detailsResponse, categoriesResponse, descriptionsResponse, summaryResponse] = await Promise.all([
              getBookByID(id),
              getDetailsByID(id),
              getCategorysByID(id),
              getDescriptionsByID(id),
              getSummaryByID(id),
          ]);
  
          // Imprimir las respuestas para depuración
          console.log('Book Response:', bookResponse.status);
          console.log('Details Response:', detailsResponse.status);
          console.log('Categories Response:', categoriesResponse.status);
          console.log('Descriptions Response:', descriptionsResponse.status);
          console.log('Summary Response:', summaryResponse.status);
  
          // Comprobar que todas las respuestas son satisfactorias
          if (bookResponse.status !== 200 || detailsResponse.status !== 200 || categoriesResponse.status !== 200 || descriptionsResponse.status !== 200 || summaryResponse.status !== 200) {
            throw new Error('Error en la carga de datos');
          }
  
          // Establecer los datos en el estado
          setBook(bookResponse.data[0]);
          setDetails(detailsResponse.data[0]);
          setcategorys(categoriesResponse.data || []);
          setDescriptions(descriptionsResponse.data[0]);
          setSummary(summaryResponse.data[0]);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false); // Finalizar carga
      }
  };
  
    obtenerDatos();
}, [id]);

if (loading) return <div>Cargando...</div>;
if (error) return <div>Error: {error}</div>;



  const botones = () => {
    if (cambio === 'DETALLES') {
      return <Detalles details={details} categorys={categorys} />;
    } else if (cambio === 'DESCRIPCION') {
      return <Descripcion descriptions={descriptions} />;
    } else {
      return <Resumen summary={summary} />;
    }
  };

  return (

    <>
      <div className="contenedor-flecha-navbar2" >
        <div className="contenedor-flecha" >
          <div className='row'>
            <i className="bi bi-arrow-left" id="otro" onClick={() => navegacion(-1)}></i>
          </div>
        </div>

        <div className='container' id='navbar12'>
          <div className='contenedor-botones'>

            <button type="button"
              className={`boton-navbar ${cambio === 'DETALLES' ? 'active' : ''}`}
              onClick={() => setCambio('DETALLES')}>Detalles</button>

            <button
              type="button"
              className={`boton-navbar ${cambio === 'DESCRIPCION' ? 'active' : ''}`}
              onClick={() => setCambio('DESCRIPCION')}>Descripcion</button>
            <button
              type="button"
              className={`boton-navbar ${cambio === 'RESUMEN' ? 'active' : ''}`}
              onClick={() => setCambio('RESUMEN')}>Resumen</button>
          </div>
        </div>
      </div>

      <div className="contenedor-de-libros " >

        <div className="contenedor-completo">
          <div className="contenedor-portada">
            <img className="imagen-portada" src={book.portada_libro} alt={book.titulo_libro}  />
          </div>
          <div className="contenetor-titulo">
            <h4>{book.titulo_libro}</h4>
          </div>
        </div>

        <div className="contenedor-DDR">
          {botones()}
        </div>
      </div>

    </>
  )
}

export default Libro
