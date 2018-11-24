import React, { useState } from 'react'

import { withStyles } from '@material-ui/core/styles';
import * as Routes from "../routes";
import H1 from './generic/typography/H1';
import Link from './generic/typography/Link';
import Button from './generic/typography/Button';
import { Tabs } from '@material-ui/core';
import NavLink from './generic/actions/NavLink';

const Header = ({ classes, siteTitle }) => {

  const [value, setValue] = useState(0);

  const handleChangeValue = (event, v) => {
    setValue(v);
  }

  return (
    <header className={classes.root}>
      <div>
        <Link to={Routes.HOME}> <H1>{siteTitle}</H1></Link>
      </div>
      <nav className={classes.nav}>


        <Tabs
          value={value}
          onChange={handleChangeValue}
          indicatorColor="secondary"
        >
          <NavLink to={Routes.ABOUT} label="About Us" />
          <NavLink to={Routes.BLOG} label="Blog" />
        </Tabs>

      </nav>
    </header >
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
