import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Form } from "./Form";
import { Button } from "@material-ui/core";
import Details from "./Details";
import { DetailsContext } from "./Context";

function rand() {
    return Math.round(Math.random() * 20) -10;
}

function getModalStyle() {
    const top = 25;
    const left = 25;

    return {
        top: `${top}%`,
        margin:'auto'
    };
}

const useStyles = makeStyles(theme => ({
    root: {

    },
    paper: {
        position: 'absolute',
        width: 450,
        height: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: "none",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 200,
        width: 200,
    }
}));

const Container = ()  =>{
    const { added, cancel } = useContext(DetailsContext);

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        cancel()
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Form onCancel={handleClose} onSubmit={handleSubmit}/>
        </div>
    );

    return (
        <div className={classes.root}>
            {(added && !open) ? (
                <Details />
            ) : (
                <Button onClick={handleOpen} ariant="outlined" size="large" color="primary" className={classes.button}>
                    Add Information
                </Button>
            )}
            <Modal
                className={classes.modal}
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
                {body}
            </Modal>
        </div>
    );
}

export default Container;
