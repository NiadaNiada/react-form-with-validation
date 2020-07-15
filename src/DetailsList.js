import React, {useContext, useMemo} from "react";
import {DetailsContext} from "./Context";
import {makeStyles} from '@material-ui/core/styles';
import Details from "./Details";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    cards: {
        margin: "10px"
    }
}));

const DetailsList = () => {
    const classes = useStyles();
    const {users, uniq} = useContext(DetailsContext);
    console.log("DetailsList", users)
    let info;

    const mappedDetails= useMemo(
        () =>
            info = users.map(user => {
                return (
                    <div className={classes.cards} key={uniq()}>
                        <Details user={user} />
                    </div>

                )
            }),
        [users]
    );

    if (users.length > 0) {
        info = mappedDetails
    } else {
        info = (
            <h1>No Information added</h1>
        )
    }
    return (
        <div className={classes.root}>
            {info}
        </div>

    )
};


export default DetailsList;