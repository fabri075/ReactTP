import { Route, Routes } from 'react-router-dom'
import GeneralMenu from './components/GeneralMenu'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import Checkout from './components/Checkout'

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      {/* <Route path='/' element={<Navigate to="home"/>} /> */}
      <Route path='/home' element={<GeneralMenu text="Bienvenido" />} />
      <Route path='/' element={<ItemListContainer greeting="Listado de productos"/>} />
      <Route path='/category/:name' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Checkout/>} />
      <Route path='/contact' element={<GeneralMenu text="Contacto" />} />
      <Route path='/about' element={<GeneralMenu text="Acerca de" />} />
      <Route path='*' element={<GeneralMenu text="Pagina no encontrada" />} />
    </Routes>
    </>
  )
}

export default App
