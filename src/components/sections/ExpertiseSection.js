import React from "react";
import Markdown from 'markdown-to-jsx';
import Reveal from 'react-reveal/Reveal';

export default function ExpertiseSection(props) {
  const {
    heading,
    description,
    companies
  } = props

  return (
    <React.Fragment>
      <section className="expertise">
        <Reveal effect="fadein-up">
          <p className="section-name">{heading}</p>
          <div className="description">
            <Markdown>{description}</Markdown>
          </div>
        </Reveal>

        <div role="tablist" className="company-tablist">
          {companies.map((item, i) => (
            <Reveal effect={`fadein-up delay-${i+1}`} delay={(i+1)*100}>
              <div key={i} className="company-name">
                  {item.companyname}
              </div>
            </Reveal>
            ))}
        </div>

        <div className="companies-container">
          {companies.map((item, i) => (
          <Reveal effect={`fadein-up delay-${i+1}`} delay={(i+1)*100}>
            <div key={i} className="job-column">
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
          </Reveal>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}