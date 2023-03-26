import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, CardActionArea } from '@mui/material';
import styles from './itemListContainer.module.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemListContainer = ({ greeting, list}) => {
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
          <Grid item xs={3} sm={6} md={4}>
            <div className={styles.centercard}>
              <Link to={`/item/${item.id}`}>
                <Card key={item.id} sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={item.imagen}
                      alt={item.nombre}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.nombre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.descripcion}
                      </Typography>
                      <Typography variant='h5' align='center'>
                        $ {item.precio}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default ItemListContainer