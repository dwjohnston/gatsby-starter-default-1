import React, { useState, Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import * as Routes from "../routes";
import H1 from './generic/typography/H1';
import Link from './generic/typography/Link';
import Button from './generic/typography/Button';
import { Tabs } from '@material-ui/core';
import NavLink from './generic/actions/NavLink';

class Header extends Component {

  state = {
    value: 99
  };
  handleChangeValue = (e, v) => {
    console.log(e, v);
    console.log(this);
    this.setState({ value: v });
  };

  constructor() {
    super();

    console.log("construct");
  }

  render() {

    console.log(this);
    const { classes, siteTitle } = this.props;
    const { value } = this.state;
    return (
      <header className={classes.root}>
        <div>
          <Link to={Routes.HOME}> <H1>{siteTitle}</H1></Link>
        </div>

        {value}
        <nav className={classes.nav}>


          <Tabs
            value={value}
            onChange={this.handleChangeValue}
            indicatorColor="secondary"
          >
            <NavLink to={Routes.ABOUT} label="About Us" value={0} />
            <NavLink to={Routes.BLOG} label="Blog" value={1} />
          </Tabs>

        </nav>
      </header >
    );
  }

}

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
