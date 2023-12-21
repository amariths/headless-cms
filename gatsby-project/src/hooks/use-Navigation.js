import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'



function UseNavigation() {

    const data = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: {url: ASC}) {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)


  return data.allContentfulPage.edges;
}

export default UseNavigation
