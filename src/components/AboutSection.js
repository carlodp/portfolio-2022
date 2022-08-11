import React from "react";
import Techstacks from "./Techstacks";

export default function AboutSection(props) {
  const {
    description,
    techstacks
  } = props

  return (
    <React.Fragment>
      <section className="about">
        <p className="section-name">01. About</p>
        <p className="description">{description}</p>
        <Techstacks techstacks={techstacks}/>
      </section>
    </React.Fragment>
  );
}