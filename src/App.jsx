import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
    <ItemListContainer greeting="Hola" />
    </main>
    </>
  )
}

export default App
