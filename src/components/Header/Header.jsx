import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import MyInput from "../UI/MyInput";
import MyList from "../UI/MyList";
import Wrapper from "../UI/Wrapper";
import logo from "./../../assets/img/circle b.svg";
import close from "../../assets/img/close-menu.svg";
import menu from "../../assets/img/menu.svg";
import { useDispatch } from "react-redux";
import { cate } from "../../redux/generalDataSlice";
import Modal from "../UI/MyModal/Modal";

function Header() {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const handleCategory = (data) => {
    dispatch(cate(data));
  };
  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <section className="site-header">
      <div className="container">
        <header className="header">
          <div className="link__wrapper">
            <Link onClick={() => handleCategory("tenetur")} to={"/tenetur"}>
              <img src={logo} alt="Bobur logo" width={58} height={58} />
              <strong>BoburBlog</strong>
            </Link>
          </div>
          <Wrapper className={"nav__wrapper"}>
            <MyList />
            <MyInput isOn={setModal} />
            <Modal isOn={modal} />
          </Wrapper>
          {<MyList className={toggle ? "none" : "block"} />}
          {<img onClick={handleClick} src={toggle ? menu : close} alt="menu" />}
        </header>
        <MyInput isOn={setModal} className={"mobile-input"} />
      </div>
    </section>
  );
}

export default Header;
