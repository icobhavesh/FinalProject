import React from "react";
import { useState } from "react";
const UseState = () => {
  const [state, setstate] = useState(0);
  return (
    <>
      <h1> increment {state} </h1>
      <button style={{backgroundColor:"skyblue", margin:" 10px 10px",padding:"10px 20px",position:"relative"}}  onClick={()=>setstate((pre)=>pre+1)}> +</button>
      {/* <h1> decrement{state}</h1> */}
      {/* <button onClick={()=>setstate(state+1)}>+</button> */}

      <button style={{backgroundColor:"skyblue", margin:" 5px 5px",padding:"10px 20px" ,fontSize:"20px"}}onClick={()=>setstate((state) => state-1)}> - </button>
    </>
  );
};

export default UseState;
