import { useState } from "react";
import styles from '../ItemDetail.module.css';


const QuantitySelector = () => {
    const [count, setCount] = useState(0);

    return (
        <div class={styles.input-group}>
            <button class={`${styles.input-group-btn} ${styles.btn-left}`}>Botón izquierdo</button>
            <input type="text" class="form-control" placeholder="Ingrese su texto aquí..." />
            <button class={`${styles.input-group-btn} ${styles.btn-right}`}>Botón derecho</button>
        </div>
    )
}

export default QuantitySelector