import React from "react";
import Markdown from 'markdown-to-jsx';
import Reveal from 'react-reveal/Reveal';

export default function AboutSection(props) {
  const {
    heading,
    description,
    techstacks
  } = props

  return (
    <React.Fragment>
      <section className="about">
        <Reveal effect="fadein-up">
          <p className="section-name">{heading}</p>
          <div className="description">
            <Markdown>{description}</Markdown>
          </div>
        </Reveal>

        <div className="techstack-container">
          {techstacks.map((item, i) => (
          <Reveal effect={`fadein-up delay-${i+1}`} delay={(i+1)*100}>
            <div key={i} className="techstack-column">
                <p className="techstack-title">{item.techstackname}</p>
                <ul className="skills-column">
                    {item.stack.map((item, i) => (
                        <li key={i} className="techstack-item">{item.stackname}</li>
                    ))}
                </ul>
            </div>
          </Reveal>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}