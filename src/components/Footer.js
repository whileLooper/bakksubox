import React from 'react'
import InstagramFeed from './InstagramFeed'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <div className="footer-links">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
        {/* <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span> */}
      </div>
    </footer>
  </div>
)
