import Navbar from "../../components/navbar/Navbar";
import React, { Fragment, useState } from "react";
import ListMenu from "../../components/listmenu/ListMenu";
const TestOverlay = () => {
  const [showMenu, setShowMenu] = useState(true);
  const clickHandler = () => {
    setShowMenu(false);
  };
  const clickShowHandler = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    setShowMenu(true);
  };
  const lol: string = `transition ease-in-out delay-150 ${
    showMenu ? "bg-black -z-1 fixed w-full h-full opacity-30" : ""
  }`;
  return (
    <Fragment>
      <div className={lol}></div>
      <Navbar showMenu={clickShowHandler} />
      <ListMenu menuHandler={clickHandler} state={showMenu} />
    </Fragment>
  );
};
export default TestOverlay;
