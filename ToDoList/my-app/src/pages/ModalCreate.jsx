import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { Button } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
        if (focused) {
            return 'This field is being focused';
        }

        return 'Helper text';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
}

export default function ModalCreate(props) {
    const [form, setFormValue] = React.useState({ title: "fsdfsdf", description: "" });

    const changeFormTitle = ((event) => setFormValue((form) => ({ ...form, title: event.target.value })));
    const changeFormDescription = ((event) => setFormValue((form) => ({ ...form, description: event.target.value })));
    const handleSubmit = () => {
        console.log('[form]', form);
    }

    return <div>
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>

                <FormControl sx={{ width: '25ch' }}>
                    <OutlinedInput
                        value={form.title}
                        onChange={changeFormTitle}
                        placeholder="Please enter text" />
                    <MyFormHelperText />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        onChange={changeFormDescription}
                        value={form.description}
                    />
                    <Button variant="contained" onClick={handleSubmit}>Contained</Button>
                </FormControl>
            </Box>
        </Modal>
    </div>;

}