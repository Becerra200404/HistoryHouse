

const Detalles = ({ details , categorys}) => {
  const categorias = categorys.map(libro => libro.nombre_categoria).join(', ');
  return (
    <div className="contenedor-detalle">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ backgroundColor: '#E8E0C8' }}>
        <h2 style={{ textAlign: 'center' }}>Detalles del libro</h2>
        <div className="container-fluid detalles-container">
          <div className="detalles-box">
            <p className="card-text mb-auto">Autor: {details.nombre_autor}</p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Editorial: {details.nombre_editorial}</p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Número de páginas: {details.numero_paginas}</p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Fecha de publicación: {details.fecha_publicacion}</p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Categorias: {categorias} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detalles
