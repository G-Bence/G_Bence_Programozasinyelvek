import { useEffect, useState } from 'react'
import type { ProgLang } from './Types/progLangType'
import "bootstrap/dist/css/bootstrap.min.css"
import Statistics from "./Components/statistics"
import CardList from './Components/cardList'


function App() {
  const [ProgramozasiNyelvLista, setProgramozasiNyelvLista] = useState<ProgLang[]>([])

  useEffect(() => {
    fetch("./programozasinyelvek.json")
    .then(response => response.json())
    .then(data => setProgramozasiNyelvLista(data))
    .catch((err) => {
      console.log(`Error occured: ${err}`)
    })
  }, [])

  return (
    <>
      <div className="container" id='main-container'>
        <h1 className="h1 text-center">Programming Languages</h1>
        <Statistics list={ProgramozasiNyelvLista}/>
        <CardList list={ProgramozasiNyelvLista}/>
      </div>
    </>
  )
}

export default App
