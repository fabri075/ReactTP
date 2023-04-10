import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ModalUser = ({ show, handleClose, handleSave }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [user, setUser] = useState("");
    
    const handleEmptyData = () => {
        setNombre("");
        setApellido("");
        setEmail("");
        setLocalidad("");
        handleClose();
    }

    const handleSaveData = () => {

    }

    useEffect(() => {
      
    })
    
    return (

        <Dialog open={show} onClose={handleEmptyData}>
            <DialogTitle>Finalizar compra</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Para finalizar con su compra, necesitamos que complete la siguiente información.
                </DialogContentText>
                <TextField autoFocus margin="dense" id="name" label="Nombre" type="text" fullWidth variant="standard" value={nombre} />
                <TextField margin="dense" id="last_name" label="Apellido" type="text" fullWidth variant="standard" value={apellido}/>
                <TextField margin="dense" id="city" label="Localidad" type="text" fullWidth variant="standard" value={localidad} />
                <TextField margin="dense" id="email" label="Email" type="email" fullWidth variant="standard" value={email} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleEmptyData}>Cancelar</Button>
                <Button color='warning' variant='contained' onClick={handleSaveData}>Confirmar compra</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalUser