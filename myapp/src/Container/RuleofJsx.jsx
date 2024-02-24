import React from "react";

const RuleofJsx = () => {
  const name = true;
  return (
    <>
      <h1> 
        {name ? <>test</>
       : <h1>nothing to show</h1>}
       </h1>
    </>
  );
};

export default RuleofJsx;
