import React, { useContext } from "react";
import { CardContext } from "../../pages/_app";
import ListMenuEl from "./ListMenuEl";
const ListMenu = ({
  menuHandler,
  state,
}: {
  menuHandler: () => void;
  state: boolean;
}) => {
  const cardElements = useContext(CardContext);
  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    menuHandler();
  };
  return (
    <nav
      id="sidebar-menu"
      className={`transition ease-in-out delay-150 fixed block z-9 bg-gray-800 w-64 h-full top-0 right-0 ${
        state ? "" : "translate-x-64"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-white text-xl pb-2 flex">List</h3>
        <div onClick={clickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={1.5}
            stroke="white"
            className="w-10 h-7 flex transition ease-in-out delay-50 cursor-pointer hover:stroke-cyan-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <ul className="justify-evenly text-center w-full h-auto m-auto max-h-[calc(100vh-36px)] border rounded-sm bg-slate-400 overflow-y-auto">
        {cardElements.value.map((el) => (
          <ListMenuEl name={el} key={Math.random()} />
        ))}
      </ul>
    </nav>
  );
};
export default ListMenu;
