import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styles from './itemListContainer.module.css';

const ItemListContainer = ({greeting}) => {
  return (
    <section className={styles.container}>
        <h1>{greeting}</h1>
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" width='100%' height={80} />
      <Skeleton variant="rounded" width='100%' height={80} />
      <Skeleton variant="rectangular" width='100%' height={80} />
      <Skeleton variant="rounded" width='100%' height={80} />
      <Skeleton variant="rectangular" width='100%' height={80} />
      <Skeleton variant="rounded" width='100%' height={80} />
      <Skeleton variant="rectangular" width='100%' height={80} />
      <Skeleton variant="rounded" width='100%' height={80} />
    </Stack>
    </section>
  )
}

export default ItemListContainer