import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from "../components/layout"

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
    const data = useStaticQuery(graphql`
query {

    allContentfulPortfolioItems {
      edges {
        node {
          namn
          pris
          description {
            description
          }
          bild {
            gatsbyImage(width: 300, height: 200)
          }
        }
      }
    }
}
`
)

   return (
  <Layout>
    <ul className="posts">
        {data.allContentfulPortfolioItems.edges.map((edge) => {
            return(
                <li className="post" key={edge.node.id}>
                    <h2>
                        {edge.node.namn}
                    </h2>
                    <p className="exept">
                        {edge.node.pris}
                    </p>
                    <p className="des">
                        {edge.node.description.description}
                    </p>

                    <GatsbyImage alt={edge.node.namn} image={edge.node.bild.gatsbyImage} />

                </li>
            )
        })}

    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
    }

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
