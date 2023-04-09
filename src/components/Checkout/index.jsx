import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import styles from './checkout.module.css';
import { Button } from '@mui/material';

const Checkout = () => {
    const { cart, deleteAllCart, deleteItemCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const handleDeleteAll = () => {
        deleteAllCart();
    }
    const handleDeleteItem = (item) => {
        deleteItemCart(item);
    }
    useEffect(() => {
      setTotal(cart.reduce((acumulador, item) => acumulador + item.cantidad * item.precio, 0));
    }, [cart])
    
    return (
        cart.length >= 1 ? (
        <div className={styles.container}>
            <div className={styles.CartContainer}>
                <div className={styles.header}>
                    <h3 className={styles.heading}>Carrito</h3>
                    <h5 className={styles.action} onClick={() => handleDeleteAll()}>Eliminar todo</h5>
                </div>
                
                {cart.map((item) => (
                <div className={styles.CartItems}>
                    <div className={styles.imagebox}>
                        <img src={item.imagen} height={"120px"} width={"150px"}></img>
                    </div>
                    <div className={styles.about}>
                        <h2 className={styles.title}>{item.nombre}</h2>
                        <h3 className={styles.subtitle}>Descripcion</h3>
                    </div>
                    <div className={styles.about}>
                        <h2 className={styles.title}>Cantidad</h2>
                        <div className={styles.subtitle}>{item.cantidad} unidad</div>
                    </div>
                    <div className={styles.prices}>
                        <div className={styles.amount}>${item.precio * item.cantidad} </div>
                        <div className={styles.remove} onClick={() => handleDeleteItem(item.id)}>Eliminar</div>
                    </div>
                </div>
                ))}
                <hr />
                <div className={styles.checkout}>
                    <div className={styles.total}>
                        
                            <div className={styles.subtotal}>Subtotal</div>
                        
                        <div className={styles.totalAmount}>${total}</div>
                    </div>
                    <Button className={styles.confirmShop} color='warning' variant='contained' >Comprar</Button>
                </div>
            </div>
        </div>
        ) : (
            <div className={styles.notFound}>
            <h1>El carrito esta vacio</h1>
            </div>
        )
    )
}

export default Checkout