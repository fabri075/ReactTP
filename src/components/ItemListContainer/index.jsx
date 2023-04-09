import { Grid } from '@mui/material';
import styles from './itemListContainer.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList';
import db from "../../../db/firebase-config.js";
import { collection, getDocs } from 'firebase/firestore';
import Loading from '../Loading';

const ItemListContainer = ({ greeting }) => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false)
  const itemsRef = collection(db, "items");
  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef)
    const Items = itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    if (name != undefined) {
      setProducts(Items.filter((prod) => prod.categoria === name));
    } else {
      setProducts(Items);
    }
    setLoad(true);
  }
  useEffect(() => { setLoad(false); getItems() }, [name]);

  return (
    <section className={styles.container}>
      <h1>{name ? name : greeting}</h1>
      {!load ? (
        <Loading screen="listado"/>
      ) : (
        <Grid container spacing={5}>
          {products.map((item) => (
            <ItemList key={item.id} item={item} />
          ))}
        </Grid>
      )}
    </section>
  )
}

export default ItemListContainer