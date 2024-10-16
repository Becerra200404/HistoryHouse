import './Inicio.css'

const Navbar = () => {
    return (

        <div className="header">
          <div className='tres-lineas'>
            <button className="list-button">
              <i className="bi bi-list"></i>
            </button>
          </div>
        <div className="logo-nombre">
          <div className="logo">
            <h3>logo</h3>
          </div>
          <div className="nombre-app">
            <h3>HistoryHouse</h3>
          </div>
        </div>
        <div className="contenedor-buscador">
          <div className="form-search">
            <form role="search">
              <input type="text" placeholder="Titulo del libro" />
            </form>
          </div>
        </div>
      </div>
    )
}

export default Navbar
