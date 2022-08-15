import * as React from 'react';
import { Helmet } from "react-helmet";
import "../styles/all.scss";
import "../styles/transitions.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import Pagecontent from './Pagecontent';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-cover.jpg`} />
        <meta property="og:image:alt" content="Thumbnail of my portfolio website." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@carlodp_" />
        <meta name="twitter:creator" content="@carlodp_" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${withPrefix("/")}img/og-cover.jpg`} />
      </Helmet>
      <Pagecontent pageContent={children} />
    </div>
  );
};

export default TemplateWrapper;
