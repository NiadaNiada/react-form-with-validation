import React, {Fragment, useContext} from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {DetailsContext} from "./Context";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    details: {
        backgroundColor: theme.palette.background.default,
        width: 400,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

export default function Details() {
    const classes = useStyles();
    const {fields} = useContext(DetailsContext);

    return (
        <List className={classes.root}>
            <div style={{marginTop: 20}} className={classes.details}>
                <Fragment>
                    <Typography variant="h2" align="center">
                        Thank you!
                    </Typography>
                    <Typography component="h4" align="center" style={{marginTop: 40}}>
                        You have successfully added your details
                    </Typography>
                </Fragment>
                <ListItem>
                    <ListItemText primary="Name:" secondary={fields.name}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Age:" secondary={fields.age ?? "-"}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Email:" secondary={fields.email}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Gender:" secondary={fields.gender}/>
                </ListItem>
            </div>
        </List>

    )
        ;
}