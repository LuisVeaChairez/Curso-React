import { useState, useEffect } from 'react'
import { getRandomFact } from './services/facts'
import { getImage } from './services/image'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const [url, setUrl] = useState()

  // effect para obtener el fact
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact)) // se asigna el valor del fact usando setFact
  }, [])

  // effect para obtener la url
  useEffect(() => {
    if (!fact) return // si fact no tiene contenido se acaba la función
    const firstThreeWords = fact.split(' ', 3).join(' ') // se obtienen las primeras 3 palabras

    getImage(firstThreeWords).then(newUrl => setUrl(newUrl)) // se cambia el valor de url con setUrl
  }, [fact])

  // función para cambiar el fact cada vez que se da click al botón
  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {url && <img src={url} />}
    </main>
  )
}
