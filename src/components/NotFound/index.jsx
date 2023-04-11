import React from "react";
import styles from "./notfound.module.css";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const NotFound = ({ view }) => {
  return (
    <div className={styles.notFound}>
      <div className={styles.backnotFound}>
        <h1>{view}</h1>
        <RemoveShoppingCartIcon sx={{ fontSize: 200 }} />
      </div>
    </div>
  );
};

export default NotFound;
