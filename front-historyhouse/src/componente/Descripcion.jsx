

const Descripcion = ({ descriptions }) => {
  return (
    <div className="container-Descripcion">

      <div className="contenedor-title-descripcion">
        <h1>Descripción del libro</h1>
      </div>


      
        <div className="card-box">
          <h4 className="mb-0">Sinopsis</h4>
          <p className="card-text mb-auto">
            <h5>{descriptions.sinopsis_libro}</h5>
          </p>
        </div>
      

      
        <div className="card-box">
          <h4 className="mb-0">Objetivos</h4>
          <p className="card-text mb-auto">
            <h5>{descriptions.objetivos_libro}</h5>
          </p>
        </div>
    

    </div>
  )
}

export default Descripcion
