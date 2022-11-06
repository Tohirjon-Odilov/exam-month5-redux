import React from 'react'
import Header from "../Header/Header"
import './NotFound.scss'
import notFound from './../../assets/img/404.png'
import right from './../../assets/img/arrowright.svg'
import { Link } from "react-router-dom"

function NotFound() {
  return (<>
    <Header />
    <section className="site-notFound">
      <div className="container">
        <div className="notFound">
          <img src={notFound} alt="Not Found: Code 404" />
          <h3>Page not found - 404</h3>
          <p>This page not found (deleted or never exists). Try a phrase in search box or back to home and start again.</p>
          <Link to={'/'}>
            <h4>TAKE ME HOME!</h4>
            <img src={right} alt="Arrow right" width={6} height={10} />
          </Link>
        </div>
      </div>
    </section>
  </>
  )
}

export default NotFound