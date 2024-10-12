import { Link } from "react-router-dom"
import './Inicio.css'

const Home = () => {
  return (
    <div>
      <div className="contenedor">
        <div className="contenedo r-conciertos">
          <div className="card" style={{ backgroundImage: "url('/assets/img.jpg')" }}>
            <div className="textos">
            <Link className='menu-link' to="/Libro"><h3>ir  a los detalles</h3></Link>
              <p>27 de Octubre 2021</p>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: "url('/assets/img2.jpg')" }}>
            <div className="textos">
              <h3>FalconMasters’ Concert</h3>
              <p>12 de Noviembre 2021</p>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: "url('/assets/img3.jpg')" }}>
            <div className="textos">
              <h3>Coachella</h3>
              <p>13 de Diciembre 2021</p>
            </div>
          </div>

          <div className="card" style={{ backgroundImage: "url('/assets/img4.jpg')" }}>
            <div className="textos">
              <h3>US Festival</h3>
              <p>20 de Diciembre 2021</p>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: "url('/assets/img5.jpg')" }}>
            <div className="textos">
              <h3>Altamont Speedway</h3>
              <p>27 de Diciembre 2021</p>
            </div>
          </div>


          <div className="card" style={{ backgroundImage: "url('/assets/img6.jpg')" }}>
            <div className="textos">
              <h3>Rock In Rio Again</h3>
              <p>1 de Enero 2021</p>
            </div>
          </div>

          <div className="card" style={{ backgroundImage: "url('/assets/img7.jpg')" }}>
            <div className="textos">
              <h3>Rock In Rio Again</h3>
              <p>1 de Enero 2021</p>
            </div>
          </div>

          <div className="card" style={{ backgroundImage: "url('/assets/img8.jpg')" }}>
            <div className="textos">
              <h3>Rock In Rio Again</h3>
              <p>1 de Enero 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
