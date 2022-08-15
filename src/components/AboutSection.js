import React from "react";
import TechStacks from "./TechStacks";
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
        <div className="description">
          <Markdown>{description}</Markdown>
        </div>
        <TechStacks techstacks={techstacks}/>
      </section>
    </React.Fragment>
  );
}