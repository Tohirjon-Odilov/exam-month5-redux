import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/generalDataSlice";
import search from "./../../assets/img/search.svg";

function MyInput({ ...props }) {
  const dispatch = useDispatch();
  const { className, isOn } = props;
  const [inputValue, setInputValue] = useState();

  const handleClick = (event) => {
    setInputValue(event);
    inputValue?.length + 1 && isOn(event);
    dispatch(setSearch(event.toLowerCase()));
  };

  const click = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onClick={click} className={className}>
        <input
          type="search"
          onChange={(e) => handleClick(e.target.value)}
          placeholder="Search"
        />
        <button onClick={(e) => handleClick(e.target.name)} type="submit">
          <img src={search} alt="search" />
        </button>
      </form>
    </>
  );
}

export default MyInput;
