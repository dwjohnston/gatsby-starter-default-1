import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Image from '../image';
import Img from "gatsby-image"

import Card from "../generic/Card";
import H3 from "../generic/typography/H3";
import P from '../generic/typography/P';


const PersonPanel = ({ classes, person }) => {

    const { name, title, description, id } = person;
    return (
        <Card className={classes.root}>
            <H3>                {name}
            </H3>
            <Typography variant="subheading">
                {title}
            </Typography>

            <Image name={id} />

            <P>
                {description}
            </P>
        </Card >
    );
};

const styles = {
    root: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
    },
    imageContainer: {
        width: 200,
        height: 200,
    }
};

export default withStyles(styles)(
    PersonPanel
);
