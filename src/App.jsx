import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import GeneralMenu from './components/GeneralMenu'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("./products.json")
    .then((res) => res.json())
    .then((data) => setProducts(data));
  }, [])
  return (
    <>
      <Navbar />
    <Routes>
      {/* <Route path='/' element={<Navigate to="home"/>} /> */}
      <Route path='/home' element={<GeneralMenu text="Bienvenido" />} />
      <Route path='/' element={<ItemListContainer greeting="Listado de productos" list={products}/>} />
      <Route path='/category/:name' element={<ItemListContainer list={products}/>} />
      <Route path='/item/:id' element={<ItemDetailContainer list={products}/>} />
      <Route path='/contact' element={<GeneralMenu text="Contacto" />} />
      <Route path='/about' element={<GeneralMenu text="Acerca de" />} />
      <Route path='*' element={<GeneralMenu text="Pagina no encontrada" />} />
    </Routes>
    </>
  )
}

export default App
