import { Buscar } from "./Buscar"
import { Paginacion } from "./Paginacion"
import { Episodio } from "./Episodio"

export const Personajes = ({ info, setBuscar, numeroPagina, setNumeroPagina, personaje, setPersonaje }) => {

    const clearState = () => {
        setPersonaje(null)
    }

    return (
        <div className="container">
            <button onClick={clearState} className="back-home">Volver al inicio</button>
            <Buscar setBuscar={setBuscar} setNumeroPagina={setNumeroPagina} />
            <div>
                {(!personaje || (Array.isArray(personaje) && personaje.length > 0)) ? (
                    <div className="container-personajes">
                        {personaje.map((person, index) => (
                            <div className="personaje-container" key={index}>
                                <div>
                                    <img src={person.image} alt={person.name} />
                                </div>
                                <div>
                                    <h3>{person.name}</h3>
                                    <h6>
                                        {person.status === "Alive" ? (
                                            <div>
                                                <span className="live">Estado: {person.status}</span>
                                            </div>
                                        ) : (
                                            <div>
                                                <span className="dead-unknown">Estado: {person.status}</span>
                                            </div>
                                        )}
                                    </h6>
                                    <p>
                                        <span>Ubicación: </span>
                                        <span>{person.location.name}</span>
                                    </p>
                                    <p>
                                        <span>Especie: </span>
                                        <span>{person.species}</span>
                                    </p>
                                    <p>
                                        <span>Visto por primera vez: </span>
                                        <span>Episodio {Episodio(person.episode)}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="alert alert-info px-5 mt-2" role="alert">
                        <h6>El personaje indicado para la búsqueda no existe</h6>
                    </div>
                )}
            </div>
            <div>
                <Paginacion info={info} numeroPagina={numeroPagina} setNumeroPagina={setNumeroPagina} />
            </div>

            <button onClick={clearState} className="back-home" >Volver al inicio</button>
        </div>
    )
}