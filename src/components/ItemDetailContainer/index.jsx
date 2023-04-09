import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './itemdetailcontainer.module.css';
import db from "../../../db/firebase-config.js";
import { collection, getDocs } from 'firebase/firestore';
import ItemDescription from '../ItemDescription';
import Loading from '../Loading';

const ItemDetailContainer = () => {
  const backpage = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false)
  const itemsRef = collection(db, "items");
  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef)
    const Items = itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const product = Items.find((prod) => prod.id == id)
    if (product != undefined) {
      setItem(product);
    }
    setLoad(true);
  }
  useEffect(() => { setLoad(false); getItems() }, [id]);
  return (
    <section className={styles.container}>
      <div className={styles.buttonback}>
        <Button onClick={() => backpage(-1)} variant="contained" startIcon={<ArrowBack />}>
          Volver
        </Button>
      </div>
      {!load ? (<Loading screen="producto"/>) : (
          item.id ? (
            <ItemDescription item={item} />
          ) : (
            <h1>Producto no encontrado</h1>
          )
      )}
    </section>
  )
}

export default ItemDetailContainer