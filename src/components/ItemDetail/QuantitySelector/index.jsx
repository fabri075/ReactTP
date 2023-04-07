import { useState } from "react";
import styles from '../ItemDetail.module.css';
import { Button } from "@mui/material";


const QuantitySelector = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={`${styles.inputGroup}`}>
            <Button color='warning' variant='contained'>-</Button>
            <input type="text" className={styles.formControl} value={count} />
            <Button color='warning' variant='contained'>+</Button>
        </div>
    )
}

export default QuantitySelector