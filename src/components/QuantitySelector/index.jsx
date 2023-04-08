import styles from './quantitySelector.module.css';
import { Button } from "@mui/material";


const QuantitySelector = ({count, changeQuantity}) => {
    const restar_uno = () => {
        changeQuantity(count - 1 < 1 ? 1 : count - 1);
    }
    const sumar_uno = () => {
        changeQuantity(count + 1);
    }
    return (
        <div className={`${styles.inputGroup}`}>
            <Button color='warning' variant='contained' onClick={restar_uno}>-</Button>
            <input type="number" readOnly className={styles.inputCount} min={1} step="any" value={count} />
            <Button color='warning' variant='contained' onClick={() => sumar_uno}>+</Button>
        </div>
    )
}

export default QuantitySelector