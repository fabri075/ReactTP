import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const ModalUser = ({ show, handleClose, handleSave }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  const handleEmptyData = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setConfirm("");
    setPhone("");
    handleClose();
  };

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirm = (event) => {
    setConfirm(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSaveData = () => {
    if (confirm === email) {
      handleEmptyData();
      handleSave(user);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    setUser({
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: phone,
    });
  }, [nombre, apellido, email, phone]);

  return (
    <Dialog open={show} onClose={handleEmptyData}>
      <DialogTitle>Finalizar compra</DialogTitle>
      <DialogContent>
        <DialogContentText>Para finalizar con su compra, necesitamos que complete la siguiente información.</DialogContentText>
        <TextField autoFocus margin="dense" id="name" label="Nombre" type="text" fullWidth variant="standard" value={nombre} onChange={handleNombre} />
        <TextField margin="dense" id="last_name" label="Apellido" type="text" fullWidth variant="standard" value={apellido} onChange={handleApellido} />
        <TextField margin="dense" id="email" label="Email" type="email" fullWidth variant="standard" value={email} onChange={handleEmail} />
        <TextField
          error={error}
          helperText={error ? "El email de confirmación no coincide." : ""}
          margin="dense"
          id="confirm"
          label="Confirmar Email"
          type="email"
          fullWidth
          variant="standard"
          value={confirm}
          onChange={handleConfirm}
        />
        <TextField margin="dense" id="phone" label="Telefono" type="number" fullWidth variant="standard" value={phone} onChange={handlePhone} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEmptyData}>Cancelar</Button>
        <Button color="warning" variant="contained" onClick={handleSaveData}>
          Confirmar compra
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalUser;
