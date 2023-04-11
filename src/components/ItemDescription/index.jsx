import { AddShoppingCart } from "@mui/icons-material";
import styles from "./itemDescription.module.css";
import { Alert, Button, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import QuantitySelector from "../QuantitySelector";
import { CartContext } from "../../contexts/CartContext";

const ItemDescription = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [alert, setAlert] = useState(false);
  const { addCart, totalCart } = useContext(CartContext);
  const vertical = "bottom";
  const horizontal = "right";
  const handleAddCart = () => {
    addCart(item, quantity);
    setAlert(true);
  };
  const handleQuantityChange = (total) => {
    setQuantity(total);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert(false);
  };
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
          <Button color="warning" onClick={handleAddCart} variant="contained" startIcon={<AddShoppingCart />}>
            Añadir al carrito
          </Button>
          <Snackbar open={alert} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
            <Alert onClose={handleClose} severity="success">
              Producto añadido al carrito
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
