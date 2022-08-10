import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" }
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" }
};

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  const onClick = async () => {
    setOpen(!isOpen);
    if (!isOpen) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  };

  return (
    <div id="navMenu" className={`navbar-menu`}>
      <div onKeyPress={onClick} onClick={onClick} >
        <svg width="100%" height="100%" viewBox="0 0 24 24">
          <motion.path
            {...path01Variants.closed}
            animate={path01Controls}
            transition={{ duration: 0.2 }}
            stroke="#FFFFFF"
          />
          <motion.path
            {...path02Variants.closed}
            animate={path02Controls}
            transition={{ duration: 0.2 }}
            stroke="#FFFFFF"
          />
        </svg>
      </div>
      <div className="navbar-start has-text-centered">
          <Link className="navbar-item" to="#about">
              <span>01.</span>About
          </Link>
          <Link className="navbar-item" to="#expertise">
              <span>02.</span>Expertise
          </Link>
          <Link className="navbar-item" to="#projects">
              <span>03.</span>Blog
          </Link>
          <Link className="navbar-item" to="#contact">
              <span>04.</span>Contact
          </Link>
          <Link className="navbar-item resume" to="#contact">
              Resume
          </Link>
      </div>
    </div>
  );
};

export default Menu;