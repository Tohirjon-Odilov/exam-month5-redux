import React from 'react'
import './Aside.scss'
import right from './../../assets/img/arrowright.svg'
import facebook from './../../assets/img/facebook.svg'
import github from './../../assets/img/github.svg'
import twitter from './../../assets/img/twitter.svg'
import linkdin from './../../assets/img/linkdin.svg'


function Aside() {
  return (
    <section className="aside-section">
      <div className="container">
        <div className="aside">
          <h4>What I do!</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
          <div className="aside__explore">
            <span>EXPLORE ME</span>
            <div className="aside__wrapper">
              <img src={right} alt="Arrow Right" />
            </div>
          </div>
          <div className="aside__img-wrapper">
            <a href="https://facebook.com"><img src={facebook} alt="facebook" /></a>
            <a href="https://github.com"><img src={github} alt="github" /></a>
            <a href="https://twitter.com"><img src={twitter} alt="twitter" /></a>
            <a href="https://linkedin.com"><img src={linkdin} alt="linkdin" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aside