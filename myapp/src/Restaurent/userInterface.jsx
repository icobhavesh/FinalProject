import React from "react";
import './userinterface.css'
const UserInterface = ({ menuData }) => {
  // console.log(menuData);
  const Styles = { width: "50px", height: "50px" };
  return (
    <>
      <div className="Container">
        {
          menuData.map((curEle, key) => {
            return <>
              <div style={{ width: '33%' }}>
                <div className="container-item">

                  <span Style={{ width: "200px" }}>{curEle.image}</span>
                  <p>{curEle.id}</p>
                  <p>{curEle.dish}</p>
                  <p>{curEle.category}</p>

                </div>

              </div>
            </>
          })
        }
      </div>
    </>
  )
}
export default UserInterface;
