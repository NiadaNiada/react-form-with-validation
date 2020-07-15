import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {Form} from "./Form";
import {Button} from "@material-ui/core";
import {DetailsContext} from "./Context";
import DetailsList from "./DetailsList";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    paper: {
        position: 'absolute',
        width: "fit-content",
        height: "fit-content",
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
        height: 50,
        width: 200,
        margin: 50
    }
}));

const Container = () => {
    const {cancel} = useContext(DetailsContext);

    const classes = useStyles();

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
        <div className={classes.paper}>
            <Form onCancel={handleClose} onSubmit={handleSubmit}/>
        </div>
    );

    return (
        <div className={classes.root}>
            <Button onClick={handleOpen} variant="outlined" size="large" color="primary" className={classes.button}>
                Add Information
            </Button>
            <DetailsList/>
            <Modal
                className={classes.modal}
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default Container;
