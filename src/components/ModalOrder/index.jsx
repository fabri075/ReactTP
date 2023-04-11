import { Box, Button, Modal, Typography } from "@mui/material";
import styles from "./modalorder.module.css";
import React from "react";

const ModalOrder = ({ num, showOrder, handleCloseOrder, finishBought }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal open={showOrder} onClose={handleCloseOrder} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Compra finalizada con éxito!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <b>Numero de compra:</b> {num}
        </Typography>
        <div className={styles.btnFinish}>
          <Button color="warning" variant="contained" onClick={finishBought}>
            Finalizar
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalOrder;
