import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */




const Image = ({ name }) => (
  <StaticQuery
    query={graphql`

    fragment squareImage on File {
      childImageSharp {
        fixed(width: 200, height: 200)  {
          ...GatsbyImageSharpFixed
        }
      }
    }


query {

  david: file(relativePath: { eq: "david.jpg" }) {
    ...squareImage
  }
  jordy: file(relativePath: { eq: "jordy.jpg" }) {
    ...squareImage
  }


  homepage: file(relativePath: {eq: "team.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1040) {
        ...GatsbyImageSharpFluid
      }
    }
  }

}
`}
    render={data => <Img
      fixed={data[name].childImageSharp.fixed}
      fluid={data[name].childImageSharp.fluid}
    />}
  />
)



export default Image
