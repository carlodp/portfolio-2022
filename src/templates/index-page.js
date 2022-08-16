import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import LandingSection from "../components/sections/LandingSection";
import AboutSection from "../components/sections/AboutSection";
import ExpertiseSection from '../components/sections/ExpertiseSection';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  landingsection,
  aboutsection,
}) => {

  return (
    <div>
      <LandingSection 
        beforetitle={landingsection.beforetitle} 
        title={landingsection.title} 
        subtitle={landingsection.subtitle} 
        shortdesc={landingsection.shortdesc} 
      />
      <AboutSection 
        description={aboutsection.description}
        techstacks={aboutsection.techstacks}
      />
      <ExpertiseSection />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  landingsection: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  aboutsection: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        landingsection={frontmatter.landingsection}
        aboutsection={frontmatter.about}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        landingsection {
          beforetitle
          shortdesc
          subtitle
          title
        }
        about {
          description
          techstacks {
            techstackname
            stack {
              stackname
            }
          }
        }
      }
    }
  }
`;
