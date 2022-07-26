import React from "react";
import { Link } from "gatsby";
import NavMenu from "./NavMenu";
import Reveal from 'react-reveal/Reveal';
import logolight from "../img/logo-light.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        foo: false,
        fixed: "",
        navSticky: "",
    };
  };

  componentDidMount() {
      this.prev = window.scrollY;
      window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
      const window = e.currentTarget;
  
      console.log(this.prev);

      if (this.prev > window.scrollY) {
          console.log("scrolling up");
          this.setState({ fixed: 'scroll-up' });
      } else if (this.prev < window.scrollY) {
          console.log("scrolling down");
          this.setState({ fixed: 'scroll-down' });
      }

      if(this.prev === 1) {
        console.log('dapat 1');
        this.setState({ fixed: '' });
      }
      
      this.prev = window.scrollY;
  }



  render() {
    return (
      <header className={`${this.state.fixed}`}>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
            <Link to="/" className="navbar-item site-logo" title="Logo">
              <Reveal effect={`navbar-item fadein-down`}>
                <img src={logolight} alt="Logo" style={{ width: "88px" }} />
              </Reveal>
            </Link>
            </div>
            <NavMenu />
          </div>
        </nav>
      </header>
    );
  }
};

export default Navbar;
