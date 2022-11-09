import React, { useState } from 'react'
import { Link } from "react-router-dom"

//style link
import './Header.scss'

//ui component
import MyInput from "../UI/MyInput"
import MyList from "../UI/MyList"
import Wrapper from "../UI/Wrapper"

//imgs
import logo from './../../assets/img/circle b.svg'
import close from '../../assets/img/close-menu.svg'
import menu from '../../assets/img/menu.svg'

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
            <Link to={"/tenetur"} >
              <img src={logo} alt="Bobur logo" width={58} height={58} />
              <strong>BoburBlog</strong>
            </Link>
          </div>
          <Wrapper className={'nav__wrapper'}>
            <MyList />
            <MyInput />
          </Wrapper>
          {<MyList className={toggle ? 'none' : 'block'} />}
          {<img onClick={handeClick} src={toggle ? menu : close} alt="menu" />}
        </header>
        <MyInput className={"mobile-input"} />
      </div>
    </section>
  )
}

export default Header