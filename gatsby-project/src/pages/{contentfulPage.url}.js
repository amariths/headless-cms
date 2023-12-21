import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import AboutTemplate from '../template/about-template'
import HomeTemplate from '../template/home-template'
import LoginTemplate from '../template/login-templates'
import PortfolioTemplate from '../template/portfolio-templates'




function Page(props) {

    const {data} = props;
    const {contentfulPage} = data;
       const getTemplate = (contentfulPage) => {
            switch (contentfulPage.template) {
                case 'about' :
                    return <AboutTemplate {...contentfulPage} />;
                case 'login' :
                    return <LoginTemplate {...contentfulPage} />;
                case 'portfolio' :
                    return <PortfolioTemplate {...contentfulPage} />;
                default:
                    return <HomeTemplate {...contentfulPage} />;
            }
        };


        return (

        <Layout>{getTemplate(contentfulPage)}</Layout>

        );
}

export const data = graphql`
query pageQuery($id: String) {
   contentfulPage(id: { eq: $id }) {
        url
        title
        content {
            raw
        }

        template
    }
 }
`


export default Page
