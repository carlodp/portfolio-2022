import React from "react";

export default function LandingSection(props) {
  const {
    beforetitle,
    title,
    subtitle,
    shortdesc,
  } = props;

  return (
    <React.Fragment>
      <section className="landing">
        <span className="before-title">{beforetitle}</span>
        <h1 className="title">
            <strong>{title}</strong>
            <span>{subtitle}</span>
        </h1>
        <p className="short-description">{shortdesc}</p>
      </section>
    </React.Fragment>
  );
}