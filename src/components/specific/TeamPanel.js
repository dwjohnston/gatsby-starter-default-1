import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PersonPanel from './PersonPanel';
import { Grid } from '@material-ui/core';

const TeamPanel = ({ classes, data }) => {
    console.log(data);
    return (
        <section className={classes.root}>


            <Grid container spacing={24}>
                {[
                    {
                        name: "David Johnston",
                        title: "Web Developer",
                        id: "david",
                        description: "I like React, Docker, and CI/CD",
                    },
                    {
                        name: "Jordan Kh",
                        title: "Web Developer",
                        id: "jordy",
                        description: "I'm experienced with WordPress, React and GraphQL"
                    }

                ].map(v => <Grid item xs={12} md={6} lg={4} xl={3} key={v.id}>
                    <PersonPanel person={v} />
                </Grid>)}

            </Grid>
        </section>
    );
};

const styles = {
    root: {},
};

export default withStyles(styles)(
    TeamPanel
);
