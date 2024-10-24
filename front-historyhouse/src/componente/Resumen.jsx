import React, { useState, useEffect, useRef } from 'react';

const Resumen = () => {
    const texto = `Capítulo 1: El narrador recuerda su niñez cuando dibujaba un elefante tragado por una serpiente boa.
Capítulo 2: El narrador, ahora piloto, se estrella en el desierto del Sahara y conoce al Principito, quien le pide que dibuje una oveja.

                    Capítulo 3: El Principito cuenta al narrador sobre su planeta de origen, el asteroide B-612.

                    Capítulo 4: Se revela que el Principito cuida de tres volcanes y una flor única en su planeta.

                    Capítulo 5: Discuten sobre los baobabs, árboles que pueden destruir el pequeño planeta si no se controlan.

                    Capítulo 6: El Principito narra su amor por las puestas de sol en su planeta.

                    Capítulo 7: El Principito se preocupa por su flor y discuten sobre el peligro de los corderos comiendo flores.

                    Capítulo 8: El Principito describe la vanidad y el orgullo de su flor.

                    Capítulo 9: El Principito decide dejar su planeta y viaja a otros asteroides.`;
    const [isPaused, setIsPaused] = useState(false);  
    const [progreso, setProgreso] = useState(0);  
    const [velocidad, setVelocidad] = useState(1);  
    const [volumen, setVolumen] = useState(1);  
    const speechRef = useRef(null);  
    const [duracion, setDuracion] = useState(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            if (speechRef.current && !isPaused) {
                const progresoActual = window.speechSynthesis.getVoices().length;  // Simulación de progreso
                setProgreso(progresoActual / texto.length * 100);  // Progreso en porcentaje
            }
        }, 500);
        return () => clearInterval(interval);
    }, [isPaused, texto]);

    const leerTexto = () => {
        const speech = new SpeechSynthesisUtterance(texto);
        speech.lang = 'es-ES'; 
        speech.pitch = 1;
        speech.rate = velocidad;
        speech.volume = volumen;
        speech.onend = () => {
            setProgreso(100);  
        };
        speechRef.current = speech;
        window.speechSynthesis.speak(speech);
        setIsPaused(false);
        setDuracion(texto.length); 
    };

    const pausarReanudar = () => {
        if (!isPaused) {
            window.speechSynthesis.pause();  
        } else {
            window.speechSynthesis.resume();  
        }
        setIsPaused(!isPaused);
    };

    const detenerAudio = () => {
        window.speechSynthesis.cancel();  
        setProgreso(0);  
        setIsPaused(false); 
    };

    return (
        <div className="contenedor">
            <h1>Resumen</h1>
            <div className="scrollspy-example bg-body-tertiary p-3 rounded-2 texto-bonito" tabIndex="0">
                <h4>First heading</h4>
                <p>{texto}</p>
            </div>

            <div className="controls mt-3">
                <button onClick={leerTexto} className="btn btn-primary">Leer en voz alta</button>
                <button onClick={pausarReanudar} className="btn btn-warning me-2">
                    {isPaused ? 'Reanudar' : 'Pausar'}
                </button>
                <button onClick={detenerAudio} className="btn btn-danger me-2">Detener</button>
            </div>

            <div className="progress mt-3">
                <div className="progress-bar" role="progressbar" style={{ width: `${progreso}%` }} aria-valuenow={progreso} aria-valuemin="0" aria-valuemax="100">
                    {Math.round(progreso)}%
                </div>
            </div>

            <div className="mt-3">
                <label htmlFor="velocidad">Velocidad: {velocidad}x</label>
                <input
                    type="range"
                    id="velocidad"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={velocidad}
                    onChange={(e) => setVelocidad(e.target.value)}
                />
            </div>

            <div className="mt-3">
                <label htmlFor="volumen">Volumen: {Math.round(volumen * 100)}%</label>
                <input
                    type="range"
                    id="volumen"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volumen}
                    onChange={(e) => setVolumen(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Resumen;
