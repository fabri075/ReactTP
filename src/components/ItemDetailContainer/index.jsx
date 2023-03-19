import { AddShoppingCart, ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './itemdetailcontainer.module.css';

const ItemDetailContainer = ({list}) => {
  const backpage = useNavigate();
  const { id } = useParams();
  const product = list.find((item) => item.id == id);
  return (
    <section className={styles.container}>
      <div className={styles.buttonback}>
        <Button onClick={() => backpage(-1)} variant="contained" startIcon={<ArrowBack />}>
          Volver
        </Button>
      </div>
      <div className={styles.ajustgrid}>
        <div className={styles.gridContainer}>
          <div className={styles.imageColumn}>
            <img src={product.imagen} alt="Descripción de la imagen" />
          </div>
          <div className={styles.textColumn}>
            <h1>{product.nombre}</h1>
            <p>{product.descripcion}</p>
            <h4>${product.precio}</h4>
            <Button color='warning' variant='contained' startIcon={<AddShoppingCart />}>Añadir al carrito</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetailContainer