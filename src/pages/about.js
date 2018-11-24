import React from 'react'
import { Link } from 'gatsby'
import withRoot from "../withRoot";

import Layout from '../components/layout'
import TeamPanel from '../components/specific/TeamPanel';
import H2 from '../components/generic/typography/H2';

const About = () => (
    <>
        <H2> Who we are </H2>

        <TeamPanel />
    </>
)

export default
    //withRoot(
    About
    //);
