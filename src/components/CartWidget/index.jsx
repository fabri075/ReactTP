import { ShoppingCart } from '@mui/icons-material'
import { Badge, Button } from '@mui/material'
import React from 'react'

const CartWidget = () => {
  return (
    <Button variant='text' ><Badge color='primary' badgeContent={1} > <ShoppingCart color='warning'/> </Badge></Button>
  )
}

export default CartWidget