import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef('0px');
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className='nav-toggle' onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links">
         {links.map((link) => {
          const { id, url, text } = link;
          return <li key={id}>
            <a href={url}>{text}</a>
          </li>
         })}
        </ul>
      </div>
    </div>
    <ul className="social-icons">
      {social.map((social_item)=>{
        const { id, url, icon } = social_item;
        return <li key={id}>
          <a href={url}>{icon}</a>
        </li>
      })}
    </ul>
  </nav>
}

export default Navbar
