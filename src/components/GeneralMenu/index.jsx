import React from 'react';
import styles from './generalmenu.module.css';

const GeneralMenu = ({text}) => {
  return (
    <section className={styles.container}>
    <h1>{text}</h1>
    </section>
  )
}

export default GeneralMenu