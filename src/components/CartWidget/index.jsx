import { ShoppingCart } from '@mui/icons-material'
import { Badge, Button } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const CartWidget = () => {
  const {quantityCart} = useContext(CartContext);
  return (
    <Button variant='text' ><Badge color='primary' badgeContent={quantityCart()} > <ShoppingCart color='warning'/> </Badge></Button>
  )
}

export default CartWidget