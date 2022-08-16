import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navDelay, loaderDelay } from '../../utils/index';

export default function LandingSection(props) {
  const {
    beforetitle,
    title,
    subtitle,
    shortdesc,
  } = props;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <span className="before-title">{beforetitle}</span>;
  const two = (
    <>
      <h1 className="title">
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </h1>
    </>
  );

  const three = <p className="short-description">{shortdesc}</p>;
  
  const four = <a className="cta-button" href="#">Hit me up!</a>;

  const items = [one, two, three, four];

  return (
    <React.Fragment>
      <section className="landing">
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition in={isMounted} key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </section>
    </React.Fragment>
  );
}