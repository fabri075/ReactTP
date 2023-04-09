import { Box, Skeleton } from '@mui/material'
import styles from './loading.module.css';
import React from 'react'

const Loading = () => {
    return (
        <div className={styles.container}>
            <Box sx={{ width: "25%" }}>
                <Skeleton variant="rectangular" height={100} />
                <Skeleton animation="wave" height={60} />
                <Skeleton animation={false} height={60} />
            </Box>
            <Box sx={{ width: "25%" }}>
                <Skeleton variant="rectangular" height={100} />
                <Skeleton animation="wave" height={60} />
                <Skeleton animation={false} height={60} />
            </Box>
            <Box sx={{ width: "25%" }}>
                <Skeleton variant="rectangular" height={100} />
                <Skeleton animation="wave" height={60} />
                <Skeleton animation={false} height={60} />
            </Box>
        </div>
    )
}

export default Loading