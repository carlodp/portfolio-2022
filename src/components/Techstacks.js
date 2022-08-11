import * as React from "react";

const Techstacks = ({ techstacks }) => (
  <div className="techstack-container">
    {techstacks.map((item) => (
    <div key={item.techstackname} className="techstack-column">
        <p className="techstack-title">{item.techstackname}</p>
        <ul className="skills-column">
            {item.stack.map((item) => (
                <li className="techstack-item">{item.stackname}</li>
            ))}
        </ul>
    </div>
    ))}
  </div>
);

export default Techstacks;