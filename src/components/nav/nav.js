import React, { useState } from 'react';
import classnames from "classnames";
import { Link  } from "gatsby";
import useAlbums from "../../queries/useAlbums";
import useLinks from "../../queries/useLinks";

import "./nav.scss";

const Nav = () => {
  const [activeSection, setActiveSection] = useState('');
  const albums = useAlbums();
  const links = useLinks();

  return <nav className="nav">
    {/*<h4 className="nav__title">inaprilwetrust</h4>*/}

    <div className={classnames("nav__section", { "nav__section_active": activeSection === '' })}>
      {links.map(({ node: { title, url, type } }, i) => <React.Fragment key={i}>
        {(url && type === "external") &&
          <a href={url} target="_blank" rel="noopener noreferrer" className="nav__link">{title}</a>}

        {(url && type !== "external") &&
          <Link to={url} className="nav__link">{title}</Link>}

        {!url &&
          <a href="#" className="nav__link"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection(`text${type.replace('albums', '')}`);
              console.log(activeSection);
            }}>{title}</a>}

      </React.Fragment>)}
    </div>

    <div className={classnames("nav__section nav__section_text", {
      "nav__section_active": activeSection === "text1"
    })} onClick={() => setActiveSection('album1')}>
      Dedicated to Valeria Koshkina, incredibly bright and charismatic fairy alien, who suffered from anorexia.
      When I found out about her death (my love for her is beyond any comments), I was overwhelmed with a strong feeling of guilt.
      I felt guilty for all of us, who worship the media cult of the skinny and support fake destructive stereotypes of beauty.
      Since then I promised myself not to retouch photos at all and to show wild raw sex, the energy of freedom, intimacy and love.
      I felt guilty for anything except love.
      Pearly Gates are the doors to heaven as well as a name for ‘vagina’ and a type of LSD-25.
      You can enter the doors. Or you can stand in front of them.
    </div>

    <div className={classnames("nav__section nav__section_text", {
      "nav__section_active": activeSection === "text2"
    })} onClick={() => setActiveSection('album2')}>
      The things they lived. The things they left behind.
    </div>
    

    <div className={classnames("nav__section nav__section_albums", {
      "nav__section_active": activeSection === 'album1'
    })}>
      {albums.map((album, i) => (
        <Link to={`/album/${album.key}`} className="nav__link" key={i}>{album.title}</Link>
      ))}
      <span className="nav__reset" onClick={() => setActiveSection('')}>menu</span>
    </div>

    <div className={classnames("nav__section nav__section_albums", {
      "nav__section_active": activeSection === 'album2'
    })}>
      {albums.map((album, i) => (
        <Link to={`/album/${album.key}`} className="nav__link" key={i}>{album.title}</Link>
      ))}
      <span className="nav__reset" onClick={() => setActiveSection('')}>menu</span>
    </div>
  </nav>;
}

export default Nav;