import { useState } from 'react';
import styles from './navbar.module.css';
import logo from '../../assets/logopag.png';
import CartWidget from '../CartWidget';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Link to="/home"> <Button>Home</Button></Link>
        <Button onClick={showCategory} 
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}> Categorías</Button>
        <Link to="/contact"><Button>Contacto</Button></Link>
        <Link to="/about"><Button>Acerca</Button></Link>
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
        <Link to="/category/Notebooks"><MenuItem onClick={closeCategory}>Notebooks</MenuItem></Link>
        <Link to="/category/Monitores"><MenuItem onClick={closeCategory}>Monitores</MenuItem></Link>
        <Link to="/category/Perifericos"><MenuItem onClick={closeCategory}>Perifericos</MenuItem></Link>
      </Menu>
    </div>
        <div className={styles.logo}>
        <Link to="/"><img src={logo} /></Link>
        </div>
    </nav>
  )
}

export default Navbar