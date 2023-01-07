import Navbar from "../../components/navbar/Navbar";
import React, { Fragment, useState } from "react";
import ListMenu from "../../components/listmenu/ListMenu";
const NavbarWithList = () => {
  const [showMenu, setShowMenu] = useState(false);
  const clickHandler = () => {
    setShowMenu(false);
  };
  const clickShowHandler = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    setShowMenu(true);
  };
  const shadow: string = `transition ease-in-out delay-150 ${
    showMenu ? "bg-black -z-1 fixed w-full h-full opacity-50" : ""
  }`;
  return (
    <Fragment>
      <div className={shadow}></div>
      <Navbar showMenu={clickShowHandler} />
      <ListMenu menuHandler={clickHandler} state={showMenu} />
    </Fragment>
  );
};
export default NavbarWithList;
