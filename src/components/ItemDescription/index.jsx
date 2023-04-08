import { AddShoppingCart } from '@mui/icons-material';
import styles from './ItemDescription.module.css';
import { Button } from '@mui/material';
import { useState } from "react";
import QuantitySelector from '../QuantitySelector';

const ItemDescription = ({item}) => {
  const [quantity, setQuantity] = useState(1)
  const handleAddCart = () => {
    console.log(quantity);
  }
  const handleQuantityChange = (total) => {
    setQuantity(total);
  }
  return (
    <div className={styles.ajustgrid}>
      <div className={styles.gridContainer}>
        <div className={styles.imageColumn}>
          <img src={item.imagen} alt="Descripción de la imagen" />
        </div>
        <div className={styles.textColumn}>
          <h1>{item.nombre}</h1>
          <p>{item.descripcion}</p>
          <h4>${item.precio}</h4>
          <QuantitySelector count={quantity} changeQuantity={handleQuantityChange} />
          <Button color='warning' onClick={handleAddCart} variant='contained' startIcon={<AddShoppingCart />}>Añadir al carrito</Button>
        </div>
      </div>
    </div>
  )
}

export default ItemDescription