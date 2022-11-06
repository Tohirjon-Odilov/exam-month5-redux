import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './Header.scss'
import MyInput from "../UI/MyInput"
import logo from './../../assets/img/circle b.svg'
import close from '../../assets/img/close-menu.svg'
import menu from '../../assets/img/menu.svg'
import MyList from "../UI/MyList"
import Wrapper from "../UI/Wrapper"

function Header() {
  const [toggle, setToggle] = useState(true)

  const handeClick = () => {
    setToggle(prev => !prev)
  }

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
          <Wrapper className={'nav__wrapper'}>
            <MyList />
            <MyInput />
          </Wrapper>
          {toggle ? <MyList className={'none'} /> : <MyList className={'block'} />}
          {<img onClick={handeClick} src={toggle ? menu : close} alt="menu" />}
        </header>
        <MyInput className={"mobile-input"} />
      </div>
    </section>
  )
}

export default Header