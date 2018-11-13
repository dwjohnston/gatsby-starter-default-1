import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import TeamPanel from '../components/specific/TeamPanel';

const About = () => (
    <Layout>
        <h1>Who we are</h1>
        <p>Welcome to page 2</p>

        <TeamPanel />
    </Layout>
)

export default About
