import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TopBarHeader = ({ isErrorPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  }

  const dropDownRef = useRef(null);
  // on click outside
  useOnClickOutside(dropDownRef, closeMenu);
  return (
    <div className="top-bar_header">
      <div className="container">
        <div className="Top-bar_main">
          <div className="Top-bar_content">
            <div className="Top-bar_content_first_first_div">
              <Link href="/">
                <a><span><i className="icon-email"></i></span>ess.reactjs02@gmail.com</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a><span><i className="icon-phone"></i></span>( 12345 ) 67890</a>
              </Link>
            </div>
          </div>
          <div className="Top-bar_content">
            <ul>
              <li className="Drop-down" ref={dropDownRef} onClick={() => setMenuOpen(!menuOpen)}>English <i className="icon-drop-down" />
                <ul className={`item ${menuOpen ? 'Drop-down--open' : 'Drop-down--close'}`}>
                  <li><a>one</a></li>
                  <li><a>two</a></li>
                  <li><a>three</a></li>
                </ul>
              </li>
              <li>USD <i className="icon-drop-down" />
              </li>
              <li>Login</li>
              <li>Wishlist</li>
              <li><i className="icon-cart" /></li>
            </ul>
          </div>
        </div>
      </div></div>
  )
};


export default TopBarHeader;
