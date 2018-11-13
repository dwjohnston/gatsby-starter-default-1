import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import * as Routes from "../routes";
import H1 from './generic/typography/H1';
import Link from './generic/typography/Link';
import Button from './generic/typography/Button';

const Header = ({ classes, siteTitle }) => {
  return (
    <header className={classes.root}>
      <div>
        <Link to={Routes.HOME}> <H1>{siteTitle}</H1></Link>
      </div>
      <nav className={classes.nav}>

        <Button component={Link} to={Routes.ABOUT} variant="contained" >
          About Us
        </Button>

      </nav>
    </header>
  );
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    padding: 20,
  },
  nav: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
  }
});

export default withStyles(styles)(
  Header
);
