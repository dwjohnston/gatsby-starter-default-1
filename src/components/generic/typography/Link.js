import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby'

const MyLink = ({ classes, children, ...rest }) => {
    return (
        <Link className={classes.root} {...rest}>
            {children}
        </Link>
    );
};

const styles = {
    root: {
        color: "inherit",
        textDecoration: "none",
    },
};

export default withStyles(styles)(
    MyLink
);
