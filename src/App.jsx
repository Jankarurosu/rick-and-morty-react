import { useEffect, useState } from "react"
import imagen from "./images/rick-morty.png"
import { Personajes } from "./components/Personajes"

export const App = () => {

  const [personaje, setPersonaje] = useState(null)
  const [numeroPagina, setNumeroPagina] = useState(0)
  const [buscar, setBuscar] = useState("")
  const [info, setInfo] = useState(null)

  const url = `https://rickandmortyapi.com/api/character/?page=${numeroPagina}&name=${buscar}`

  useEffect(() => {
    if (numeroPagina === 0) {
      return setPersonaje(null)
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setPersonaje(data.error)
        } else {
          setPersonaje(data.results)
          setInfo(data.info)
        }
      })
  }, [url])

  const Api = async () => {
    const api = await fetch(url)
    const personajesApi = await api.json();
    setPersonaje(personajesApi.results);
    setInfo(personajesApi.info);
  }

  return (
    <body>
      {
        personaje ? (
          <Personajes info={info} setBuscar={setBuscar} numeroPagina={numeroPagina} setNumeroPagina={setNumeroPagina} personaje={personaje} setPersonaje={setPersonaje} />
        ) : (
          <div>
            <h1 className="title">Aplicación de búsqueda de personajes de Rick y Morty</h1>
            <img src={imagen} className="logo" alt="Rick y Morty" />
            <br />
            <button onClick={Api} className="btn-search">Buscar personajes</button>
          </div>
        )
      }
    </body>
  )
}