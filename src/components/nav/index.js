import React, { Component } from 'react';
import classnames from "classnames";
import { Link } from "gatsby";

import "./nav.scss";

const links = [
  {
    type: "external",
    url: "http://rodovid.net/en/product/204/anastasija-lazurenko-pearly-gates-peredplata/",
    title: "Book"
  },
  {
    type: "albums",
    title: "Pearly Gates",
  },
  {
    type: "static",
    title: "Enquiry",
    url: "/enquiry"
  }
];

const albums = [
  {
    title: "Polaroids",
    url: "/album/polaroids"
  }, {
    title: "Mannequins",
    url: "/album/mannequins"
  }, {
    title: "Odessa",
    url: "/album/odessa"
  }, {
    title: "11thfloor",
    url: "/album/11thfloor"
  }
]

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { activeSection: '' };
  }

  render() {
    return <nav className="nav">
      {/*<h4 className="nav__title">inaprilwetrust</h4>*/}
      <div className={classnames("nav__section", { "nav__section_active": this.state.activeSection === '' })}>
        {links.map((l, i) => <React.Fragment key={i}>
          {(l.url && l.type === "external") &&
            <a href={l.url || "#"} target="_blank" className="nav__link">{l.title}</a>}

          {(l.url && l.type !== "external") &&
            <Link to={l.url} className="nav__link">{l.title}</Link>}

          {!l.url && 
            <a href="#" className="nav__link"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ activeSection: "text" });
                }}>{l.title}</a>}

        </React.Fragment>)}
      </div>
          
      <div className={classnames("nav__section nav__section_text", {
        "nav__section_active": this.state.activeSection === "text"
      })} onClick={() => this.setState({ activeSection: 'album' })}>
        Dedicated to Valeria Koshkina, incredibly bright and charismatic fairy alien, who suffered from anorexia. 
        When I found out about her death (my love for her is beyond any comments), I was overwhelmed with a strong feeling of guilt. 
        I felt guilty for all of us, who worship the media cult of the skinny and support fake destructive stereotypes of beauty. 
        Since then I promised myself not to retouch photos at all and to show wild raw sex, the energy of freedom, intimacy and love. 
        I felt guilty for anything except love. 
        Pearly Gates are the doors to heaven as well as a name for ‘vagina’ and a type of LSD-25. 
        You can enter the doors. Or you can stand in front of them.
      </div>

      <div className={classnames("nav__section nav__section_albums", {
        "nav__section_active": this.state.activeSection === 'album'
      })}>
        {albums.map((a, i) => (
          <a href={a.url} className="nav__link" key={i}>{a.title}</a>
        ))}
        <span className="nav__reset" onClick={() => this.setState({ activeSection: "" })}>menu</span>
      </div>
    </nav>;
  }
}

export default Nav;