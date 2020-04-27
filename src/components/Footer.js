import React from 'react'
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
      </div>
    </footer>
  </div>
)
