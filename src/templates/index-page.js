import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import LandingSection from "../components/LandingSection";
import AboutSection from "../components/AboutSection";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  beforetitle,
  title,
  subtitle,
  heading,
  shortdesc,
  mainpitch,
  description,
  intro,
}) => {

  return (
    <div>
      <LandingSection 
        beforetitle={beforetitle} 
        title={title} 
        subtitle={subtitle} 
        shortdesc={shortdesc} 
      />
      <AboutSection />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  beforetitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  shortdesc: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        beforetitle={frontmatter.beforetitle}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        shortdesc={frontmatter.shortdesc}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        beforetitle
        title
        subtitle
        shortdesc
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
