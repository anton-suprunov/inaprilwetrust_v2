import React, { Component } from 'react';

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

    this.state = { albumsActive: false };
  }

  render() {
    return <nav className="nav">
      <h4 className="nav__title">inaprilwetrust</h4>
      <div className="nav__section">
        {links.map((l, i) => <React.Fragment key={i}>
          <a href={l.url || "#"} target={l.type === "external" ? "_blank" : "_self"} className="nav__link"
            onClick={(e) => {
              if (l.type === "albums") {
                e.preventDefault();
                this.setState({ albumsActive: !this.state.albumsActive });
              }
            }}>{l.title}</a>
        </React.Fragment>)}
      </div>
      <div className={"nav__section nav__section_albums " + (this.state.albumsActive ? "nav__section_active" : "")}>
        {albums.map((a, i) => (
          <a href={a.url} className="nav__link" key={i}>{a.title}</a>
        ))}
      </div>
    </nav>;
  }
}

export default Nav;