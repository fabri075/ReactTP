import { Grid } from '@mui/material';
import styles from './itemListContainer.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList';

const ItemListContainer = ({ greeting}) => {
const {name} = useParams();
const [products, setProducts] = useState([])
useEffect(() => {
  fetch("/data/products.json")
  .then((res) => res.json())
  .then((data) => {
    if(name != undefined){
      setProducts(data.filter((prod) => prod.categoria === name));
    }else{
      setProducts(data);
    }
  })
  .catch((error) => console.log(error))
}, [name])
  return (
    <section className={styles.container}>
      <h1>{name ? name : greeting}</h1>
      <Grid container spacing={5}>
        {products.map((item) => (
          <ItemList item={item}/>
        ))}
      </Grid>
    </section>
  )
}

export default ItemListContainer