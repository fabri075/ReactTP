import { AddShoppingCart } from '@mui/icons-material';
import styles from '../ItemDetail.module.css';
import { Button } from '@mui/material';

const ItemDescription = ({item}) => {
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
          <Button color='warning' variant='contained' startIcon={<AddShoppingCart />}>Añadir al carrito</Button>
        </div>
      </div>
    </div>
  )
}

export default ItemDescription