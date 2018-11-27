import React from 'react'
import { Link } from 'gatsby'
import withRoot from "../withRoot";
import Layout from '../components/layout'
import Image from '../components/image'
import P from "../components/generic/typography/P";
const IndexPage = () => (
  <>
    <P> If you're interested in getting involved - please contact us at <a href="mailto:mwcc@blacksheepcode.com">mwcc@blacksheepcode.com</a> </P>

    <Image name="homepage" />

  </>
)

export default
  //withRoot(
  IndexPage
   //)
