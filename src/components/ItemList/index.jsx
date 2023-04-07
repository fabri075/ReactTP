import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import styles from './itemList.module.css';
import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({item}) => {
  return (
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
  )
}

export default ItemList