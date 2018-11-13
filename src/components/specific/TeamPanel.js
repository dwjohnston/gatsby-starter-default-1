import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PersonPanel from './PersonPanel';

const TeamPanel = ({ classes, data }) => {
    console.log(data);
    return (
        <section className={classes.root}>

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

            ].map(v => <PersonPanel person={v} key={v.id} />)}
        </section>
    );
};

const styles = {
    root: {},
};

export default withStyles(styles)(
    TeamPanel
);
