

const Detalles = () => {
  return (
    <div className="container-detalle">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ backgroundColor: '#E8E0C8' }}>
        <h2 style={{ textAlign: 'center' }}>Detalles del libro</h2>
        <div className="container-fluid detalles-container">
          <div className="detalles-box">
            <p className="card-text mb-auto">Autor: </p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Editorial: </p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Número de páginas: </p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Fecha de publicación: </p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Género: </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detalles
