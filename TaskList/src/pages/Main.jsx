import React from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import ModalCreate from './ModalCreate';

export default function Main() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const modal = open ? <ModalCreate
        open={open}
        handleClose={handleClose}></ModalCreate> : null;

    return <div>
        <Fab onClick={handleOpen} color="secondary" aria-label="add">
            <AddIcon />
        </Fab>
        {modal}
    </div>;
}
