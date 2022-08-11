import React from "react";
import Techstacks from "./Techstacks";
import Markdown from 'markdown-to-jsx';

export default function AboutSection(props) {
  const {
    description,
    techstacks
  } = props

  return (
    <React.Fragment>
      <section className="about">
        <p className="section-name">01. About</p>
        <p className="description">
          <Markdown>{description}</Markdown>
        </p>
        <Techstacks techstacks={techstacks}/>
      </section>
    </React.Fragment>
  );
}