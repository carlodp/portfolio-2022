import React, { useState } from "react";
import Markdown from 'markdown-to-jsx';
import {Fade, Reveal} from 'react-reveal';

export default function ExpertiseSection(props) {
  const {
    heading,
    description,
    companies
  } = props

  const [isVisible, setIsVisible] = useState(null);

  const toggle = (i) => {
      if (isVisible == i)
          setIsVisible(null)
      else
          setIsVisible(i)
  }

  return (
    <React.Fragment>
      <section className="expertise">
        <Reveal effect="fadein-up">
          <p className="section-name">{heading}</p>
          <div className="description">
            <Markdown>{description}</Markdown>
          </div>
        </Reveal>

        <div className="companies-container">
          <div role="tablist" className="company-tablist">
            {companies.map((item, i) => (
              <Reveal effect={`fadein-up delay-${i+1}`} delay={(i+1)*100}>
                <button key={i} className="company-name" onClick={() => toggle(i)}>
                   <p>{item.companyinitials}</p>
                </button>
              </Reveal>
              ))}
          </div>

          <div className="company-tabs">
            {companies.map((item, i) => (
            <div className={isVisible === i ? 'company-tab show' : 'company-tab' } >
              <Fade>
                <div key={i} index={i} className="tab-single">
                    <div className="title-company">
                        <p className="title">{item.jobtitle}</p><p className="company">{item.companyname}</p>
                    </div>
                    <p className="date-attended">{item.dateattended}</p>
                    <ul className="roles-list">
                        {item.roles.map((item, i) => (
                            <li key={i} className="role-description">{item.roledescription}</li>
                        ))}
                    </ul>
                </div>
              </Fade>
            </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}