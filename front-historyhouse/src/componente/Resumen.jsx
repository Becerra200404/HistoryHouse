

const Resumen = ( {summary} ) => {
    return (
        <div className="contenedor">
            <h1>Resumen</h1>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2 texto-bonito" tabIndex="0">
                <h4 id="scrollspyHeading1">Eeeeeh...</h4>
                <p>{summary.resumen_libro}</p>
            </div>
        </div>
    )
}

export default Resumen
