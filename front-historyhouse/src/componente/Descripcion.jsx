

const Descripcion = ( {descriptions} ) => {
  return (
    <div className="container-Descripcion">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ backgroundColor: '#E8E0C8' }}>
       <h2 style={{ textAlign: 'center' }}>Descripción del libro</h2>
      <div className="container-fluid sip-obj-container">
        <div className="card-box">
          <h4 className="mb-0">Sinopsis</h4>
          <p className="card-text mb-auto">
            <h5>{descriptions.sinopsis_libro}</h5>
          </p>
        </div>
      </div>
    </div>
    <div className="container-fluid sip-obj-container">
      <div className="card-box">
        <h4 className="mb-0">Objetivos</h4>
        <p className="card-text mb-auto">
          <h5>{descriptions.objetivos_libro}</h5>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Descripcion
