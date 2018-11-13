import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import TeamPanel from '../components/specific/TeamPanel';
import H2 from '../components/generic/typography/H2';

const About = () => (
    <Layout>
        <H2> Who we are </H2>

        <TeamPanel />
    </Layout>
)

export default About
