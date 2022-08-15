import * as React from "react";

const TechStacks = ({ techstacks }) => (
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
);

export default TechStacks;