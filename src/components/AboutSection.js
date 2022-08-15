import React from "react";
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

        <div className="techstack-container">
          {techstacks.map((item, i) => (
          <div key={i} className="techstack-column">
              <p className="techstack-title">{item.techstackname}</p>
              <ul className="skills-column">
                  {item.stack.map((item, i) => (
                      <li key={i} className="techstack-item">{item.stackname}</li>
                  ))}
              </ul>
          </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}