import { AddShoppingCart, ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './itemdetailcontainer.module.css';

const ItemDetailContainer = () => {
  const backpage = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState([])
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const product = data.find((prod) => prod.id == id)
        if (product != undefined) {
          setItem(product);
        }
      })
      .catch((error) => console.log(error))
  }, [id])
  return (
    <section className={styles.container}>
      <div className={styles.buttonback}>
        <Button onClick={() => backpage(-1)} variant="contained" startIcon={<ArrowBack />}>
          Volver
        </Button>
      </div>
      {item.id ? (
      <div className={styles.ajustgrid}>
        <div className={styles.gridContainer}>
          <div className={styles.imageColumn}>
            <img src={item.imagen} alt="Descripción de la imagen" />
          </div>
          <div className={styles.textColumn}>
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
            <h4>${item.precio}</h4>
            <Button color='warning' variant='contained' startIcon={<AddShoppingCart />}>Añadir al carrito</Button>
          </div>
        </div>
      </div>
      ) : (
        <h1>Producto no encontrado</h1>
      )}
    </section>
  )
}

export default ItemDetailContainer