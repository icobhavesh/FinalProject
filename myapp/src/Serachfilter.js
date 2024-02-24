import React, { useState } from "react";

const Serachfilter = () => {
  const array = ["bhavesh", "siddharth", "sahil", "luckey"];
  const [value, setvalue] = useState(array);
  const [data, setData] = useState("");
  const filteritem = value.filter((elem) => {
    if (elem === " ") {
      return elem;
    } else if (elem.toLowerCase().includes(data.toLowerCase())) {
      return elem;
    }
  });
  return (
    <>
      {filteritem.map((elem, key) => {
        return <>{elem}</>;
      })}
      <input type="text" onChange={(e) => setData(e.target.value)}></input>
    </>
  );
};

export default Serachfilter;
