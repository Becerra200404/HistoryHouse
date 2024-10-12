import { useEffect, useState } from "react"
import Descripcion from "./Descripcion";
import Detalles from "./Detalles";
import Resumen from "./Resumen";
import { useNavigate, useParams } from 'react-router-dom'
import './Libro.css'
import { getBookByID, getDetailsByID, getCategorysByID, getDescriptionsByID, getSummaryByID} from "../service/api";






const Libro = () => {

  const { id } = useParams(); // Obtén el ID del libro de la URL
  const [book, setBook] = useState(null);
  const [details, setDetails] = useState(null);
  const [categorys, setCategorys] = useState([]);
  const [descriptions, setDescriptions] = useState(null);
  const [summary, setSummary] = useState(null);
  console.log("Este es el libro",book);
  console.log('Estos son los detalles', details);
  console.log('Estos son las categorias', categorys);
  console.log('Estos son las descripciones', descriptions);
  console.log('Este es el resumen del libro', summary);
  
  //aqui esta  el estado de  las  pantallas 
  const navegacion = useNavigate();
  const [cambio, setCambio] = useState('DETALLES');

  useEffect(() => {
    const obtenerLibro = async () => {
      try {
        const response = await getBookByID(id); // Obtener el libro por ID
        setBook(response.data[0]); // Establecer el libro en el estado
      } catch (error) {
        console.error(error);
      }
    };

    const obtenerDetalles = async () => {
      try {
        const response = await getDetailsByID(id); // Obtener el libro por ID
        setDetails(response.data[0]); // Establecer el libro en el estado
      } catch (error) {
        console.error(error);
      }
    };

    const obtenerCategorias = async () => {
      try {
        const response = await getCategorysByID(id); // Obtener el libro por ID
        setCategorys(response.data || []); // Establecer el libro en el estado
      } catch (error) {
        console.error(error);
      }
    };

    const obtenerDescripciones = async () => {
      try {
        const response = await getDescriptionsByID(id); // Obtener el libro por ID
        setDescriptions(response.data[0]); // Establecer el libro en el estado
      } catch (error) {
        console.error(error);
      }
    };

    const obtenerResumen = async () => {
      try {
        const response = await getSummaryByID(id); // Obtener el libro por ID
        setSummary(response.data[0]); // Establecer el libro en el estado
      } catch (error) {
        console.error(error);
      }
    };

    obtenerLibro();
    obtenerDetalles();
    obtenerCategorias();
    obtenerDescripciones();
    obtenerResumen();
  }, [id]);


  const botones = () => {
    if (cambio === 'DETALLES' && details && categorys) {
      return <Detalles details={details} categorys={categorys}/>;
    } else if (cambio === 'DESCRIPCION') {
      return <Descripcion descriptions={descriptions} />;
    } else {
      return <Resumen summary={summary} />;
    }
  };
  
  if (!book) return <p>Cargando...</p>; // Mensaje de carga mientras se obtienen los datos

  return (
    
    <>
      <div className="container" >
        <div className="container" >
          <div className='row'>
            <i className="bi bi-arrow-left" id="otro" onClick={() => navegacion(-1)}></i>
          </div>
        </div>

        <div className='container' style={{ backgroundColor: '#E8E0C8' }} >
          <div className='row'>
            <div className='col' style={{ marginBottom: '15px' }}>
              <button type="button" className="btn btn-dark" style={{ backgroundColor: '#297272' }} onClick={() => setCambio('DETALLES')} >Detalles</button>{' '}
              <button type="button" className="btn btn-dark" style={{ backgroundColor: '#297272' }} onClick={() => setCambio('DESCRIPCION')} >Descripcion</button>{' '}
              <button type="button" className="btn btn-dark" style={{ backgroundColor: '#297272' }} onClick={() => setCambio('RESUMEN')} >Resumen</button>{' '}
            </div>
          </div>
        </div>
      </div>

      <div className="contenedor-de-libros  container my-3" >
        
        <div className="contenedor-completo my-4">
          <div className="contenedor-portada mb-2 mx-5">
            <img src= {book.portada_libro} alt={book.titulo_libro} />
          </div>
          <div className="contenetor-titulo">
            <h1>{book.titulo_libro}</h1>
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
