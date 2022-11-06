import React from 'react'
import './Footer.scss'
import footerLogo from '../../assets/img/footer-logo.svg'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <section className="site-footer">
      <div className="container">
        <div className="footer">
          <Link to={'/'}><img src={footerLogo} alt="Footer logo" width={182} height={70} /></Link>
          <div className="ul__wrapper">
            <ul>
              <li><a href="#fight">FIGHT WITH ME ON:</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://telegram.com">Telegram</a></li>
              <li><a href="https://youtube.com">Youtube</a></li>
              <li><a href="https://figma.com">Figma</a></li>
            </ul>
            <ul>
              <li><a href="#what">WHAT I HAVE DONE:</a></li>
              <li><a href="#xalq_xutubxonasi">Xalq Kutubxonasi</a></li>
              <li><a href="#websitee">Websitee</a></li>
              <li><a href="#website">Website</a></li>
              <li><a href="#play_parket">Play Market</a></li>
              <li><a href="#app_store">App Store</a></li>
            </ul>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#dribbble">Dribbble</a></li>
              <li><a href="#behance">Behance</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer