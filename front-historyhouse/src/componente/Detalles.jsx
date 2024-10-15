

const Detalles = ({ details, categorys }) => {
  const categorias = categorys.map(libro => libro.nombre_categoria).join(', ');
  return (
    <div className="contenedor-detalle">
      
        <div className="contenedor-title-detalles">
        <h1 >Detalles del libro</h1>
        </div>

        <div className="contenedor-de-detalles" >

          <div className="detalles-box">
            <h6>autor:  {details.nombre_autor}</h6>
          </div>

          <div className="detalles-box">
            <h6>Editorial: {details.nombre_editorial}</h6>
          </div>

          <div className="detalles-box">
            <h6>Número de páginas: {details.numero_paginas}pg.</h6>
          </div>

          <div className="detalles-box">
            <h6>Fecha de publicación: {details.fecha_publicacion}</h6>
          </div>

          <div className="detalles-box">
            <h6>Categorias: {categorias}</h6>
          </div>

        </div>
      </div>
    
  )
}

export default Detalles
