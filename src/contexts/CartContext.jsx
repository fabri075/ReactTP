import { useContext, useState } from "react";

const CartContext = useContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addCart = () => {
        
    }

    const totalCart = () => {
        
    }
    return <CartContext.Provider value={{cart, totalCart}}>{children}</CartContext.Provider>
}

export {CartContext, CartProvider};