import './Inicio.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
    return (

      <div className="header" style={{backgroundColor: '#001745'}}>
      <div className='tres-lineas'>
        <button className="list-button">
          <i className="bi bi-list"></i>
        </button>
      </div>
    <div className="logo-nombre">
    <button className="logo-button" onClick={() => navigate('/')}>
      <div className="logo">
        <h3>logo</h3>
      </div>
    </button>
      <div className="nombre-app">
        <h3>HistoryHouse</h3>
      </div>
    </div>
    <div className="contenedor-buscador">
        <div className="form-search">
          <form role="search">
            <div className="input-wrapper">
              <input type="text" className="form-control" placeholder="Titulo del libro" />
              <i className="bi bi-search"></i> 
            </div>
          </form>
        </div>
      </div>
    <div className='contenedor-usuario'>
        <button className="btn"  type="button">
          <i class="bi bi-person"></i>
          Usuario
          <i class="bi bi-caret-down-fill"></i>
        </button>
    </div>
    
  </div>
    )
}

export default Navbar
