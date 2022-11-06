import React from 'react'
import { Link } from "react-router-dom"
import logo from './../../assets/img/circle b.svg'
import './Header.scss'
import search from './../../assets/img/search.svg'

function Header() {
  return (
    <section className="site-header">
      <div className="container">
        <header className="header">
          <div className="link__wrapper">
            <Link to={"/"} >
              <img src={logo} alt="Bobur logo" width={58} height={58} />
              <strong>BoburBlog</strong>
            </Link>
          </div>
          <ul>
            <li><Link to={'/All'} >All</Link></li>
            <li><Link to={'/Design'} >Design Theory</Link></li>
            <li><Link to={'/UX'} >UX</Link></li>
            <li><Link to={'/UI'} >UI</Link></li>
            <li><Link to={'/Typography'} >Typography</Link></li>
          </ul>
          <form action="">
            <input type="search" placeholder="Search" />
            <button type="submit"><img src={search} alt="search" /></button>
          </form>
        </header>
      </div>
    </section>
  )
}

export default Header