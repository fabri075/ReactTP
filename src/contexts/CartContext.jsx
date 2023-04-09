import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addCart = (item, quantity) => {
		item.cantidad = quantity;
		const exists = cart.some((prod) => prod.id === item.id);
		if (exists) {
			const newCart = cart.map((prod) => (prod.id === item.id ? { ...prod, cantidad: quantity } : prod));
			setCart(newCart);
		} else {
			setCart([...cart, item]);
		}
	};
    const quantityCart = () => {
        const cantidad = cart.reduce((acc, curr) => acc + curr.cantidad, 0);
        return cantidad;
    };

	const deleteAllCart = () => {
		setCart([]);
	}

	const deleteItemCart = (item) => {
		const updateCart = cart.filter((prod) => prod.id !== item);
		setCart(updateCart);
	}
	

    return <CartContext.Provider value={{cart, addCart, quantityCart, deleteAllCart, deleteItemCart}}>{children}</CartContext.Provider>
}

export { CartContext, CartProvider };