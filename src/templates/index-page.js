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
  expertisesection,
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
        heading={aboutsection.heading}
        description={aboutsection.description}
        techstacks={aboutsection.techstacks}
      />
      <ExpertiseSection
        heading={expertisesection.heading}
        description={expertisesection.description}
        companies={expertisesection.companies}
      />
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
  expertisesection: PropTypes.shape({
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
        expertisesection={frontmatter.expertise}
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
          heading
          description
          techstacks {
            techstackname
            stack {
              stackname
            }
          }
        }
        expertise {
          heading
          description
          companies {
            companyname
            jobtitle
            dateattended
            roles {
              roledescription
            }
          }
        }
      }
    }
  }
`;
