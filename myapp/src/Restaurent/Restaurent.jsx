// import './Restaurent.css'
import React from "react";
import { useState } from "react";
import Menu from "./menu";
import UserInterface from "./userInterface";

const Restaurent = () => {
  const [menuData, setMenudata] = useState(Menu);
  const filteritem = (category) => {
    const updatelist = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenudata(updatelist);
  };
  // console.log(menuData);
  return (
    <>
      <h1>Restaurent</h1>

      <button onClick={() => filteritem("Breakfast")}> Breakfast</button>
      <button onClick={() => filteritem("Dinner")}> Dinner</button>
      <button onClick={() => filteritem("Lunch")}> Lunch</button>
      <br />
      <UserInterface menuData={menuData} />
    </>
  );
};

export default Restaurent;
