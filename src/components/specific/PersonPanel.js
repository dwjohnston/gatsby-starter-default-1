import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';
import Image from '../image';
import Img from "gatsby-image"




const PersonPanel = ({ classes, person, img }) => {

    const { name, title, description, id } = person;
    console.log(img);
    return (
        <Card className={classes.root}>
            <Typography variant="h3">
                {name}
            </Typography>
            <Typography variant="subheading">
                {title}
            </Typography>

            <Image name={id} />

            <Typography>
                {description}
            </Typography>
        </Card >
    );
};

const styles = {
    root: {},
};

export default withStyles(styles)(
    PersonPanel
);
