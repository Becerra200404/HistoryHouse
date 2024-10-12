import './Inicio.css'

const Navbar = () => {
    return (

        <div className="hader">

            <div className="logo">
                <h3>logo </h3>
            </div>

            <div className="nombre-app">
                <h3>HistoyHouse</h3>
            </div>

            <div className="contenedor-buscador" >
                <div className="form-search">
                    <form  role="search">
                        <input type="text" placeholder="titulo del libro"  />
                       
                    </form>
                    
                </div>
            </div>
        </div>

    )
}

export default Navbar
