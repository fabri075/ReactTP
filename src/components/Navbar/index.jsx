import React, { useState } from 'react';
import styles from './navbar.module.css';
import logo from './logopag.png';
import CartWidget from '../CartWidget';
import { Button, Menu, MenuItem } from '@mui/material';

const Navbar = () => {
  const [category, setCategory] = useState(null);
  const open = Boolean(category);
  const showCategory = (event) => {
    setCategory(event.currentTarget);
  };
  const closeCategory = () => {
    setCategory(null);
  };
  return (
    <nav className={styles.container}>
    <div className={styles.menu}>
        <Button variant='contained'>Home</Button>
        <Button onClick={showCategory} 
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}> Productos</Button>
        <Button>Contacto</Button>
        <Button>Acerca</Button>
        <CartWidget />
        <Menu
        id="basic-menu"
        anchorEl={category}
        open={open}
        onClose={closeCategory}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={closeCategory}>Categoria 1</MenuItem>
        <MenuItem onClick={closeCategory}>Categoria 2</MenuItem>
        <MenuItem onClick={closeCategory}>Categoria 3</MenuItem>
      </Menu>
    </div>
        <div className={styles.logo}>
        <img src={logo} />
        </div>
    </nav>
  )
}

export default Navbar