import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "./checkout.module.css";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import ModalUser from "../ModalUser";
import db from "../../../db/firebase-config.js";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ModalOrder from "../ModalOrder";
import NotFound from "../NotFound";

const Checkout = () => {
  const { cart, deleteAllCart, deleteItemCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [showorder, setShoworder] = useState(false);
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  const dataCollection = collection(db, "order");
  const returnHome = useNavigate();

  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleCloseOrder = () => {
    setShoworder(false);
  };
  const handleSave = (user) => {
    setLoad(true);
    setData({
      id: Math.floor(Math.random() * 90000) + 10000,
      total: total,
      user: user,
      items: cart.map((item) => ({
        id: item.id,
        precio: item.precio,
        cantidad: item.cantidad,
      })),
      fecha: Date(),
      estado: "generada",
    });
  };
  const handleDeleteAll = () => {
    deleteAllCart();
  };

  const handleDeleteItem = (item) => {
    deleteItemCart(item);
  };
  const finishBought = () => {
    setShoworder(false);
    deleteAllCart();
    returnHome("/");
  };
  useEffect(() => {
    setTotal(cart.reduce((acumulador, item) => acumulador + item.cantidad * item.precio, 0));
  }, [cart]);

  useEffect(() => {
    if (Object.keys(data).length >= 1) {
      addDoc(dataCollection, data)
        .then(() => {
          setLoad(false);
          setShoworder(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data]);

  return cart.length >= 1 ? (
    <div className={styles.container}>
      <div className={styles.CartContainer}>
        <div className={styles.header}>
          <h3 className={styles.heading}>Carrito</h3>
          <h5 className={styles.action} onClick={() => handleDeleteAll()}>
            Eliminar todo
          </h5>
        </div>

        {cart.map((item) => (
          <div key={item.id} className={styles.CartItems}>
            <div className={styles.imagebox}>
              <img src={item.imagen} height={"120px"} width={"150px"}></img>
            </div>
            <div className={styles.about}>
              <h2 className={styles.title}>{item.nombre}</h2>
              <h3 className={styles.subtitle}>Descripcion</h3>
            </div>
            <div className={styles.about}>
              <h2 className={styles.title}>Cantidad</h2>
              <div className={styles.subtitle}>{item.cantidad} unidad/es</div>
            </div>
            <div className={styles.prices}>
              <div className={styles.amount}>${item.precio * item.cantidad} </div>
              <div className={styles.remove} onClick={() => handleDeleteItem(item.id)}>
                Eliminar
              </div>
            </div>
          </div>
        ))}
        <hr />
        <div className={styles.checkout}>
          <div className={styles.total}>
            <div className={styles.subtotal}>Subtotal</div>

            <div className={styles.totalAmount}>${total}</div>
          </div>
          <Button className={styles.confirmShop} onClick={handleOpen} color="warning" variant="contained">
            Comprar
          </Button>
        </div>
        <ModalUser show={show} handleClose={handleClose} handleSave={handleSave} />
        <ModalOrder num={data.id} showOrder={showorder} handleCloseOrder={handleCloseOrder} finishBought={finishBought} />
        <Backdrop sx={{ color: "warning", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={load} onClick={handleClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  ) : (
    <NotFound view="El carrito esta vacio" />
  );
};

export default Checkout;
