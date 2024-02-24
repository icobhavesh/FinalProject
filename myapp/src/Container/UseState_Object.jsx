import React from 'react'
import { useState } from 'react'
import './btn.css'

const UseState_Object = () => {
    const [Current_name, Setname] = useState({firstname:"bhavesh", lastName:"saxena "})
    const bhavesh=()=>{
        Setname({...Current_name,firstname:"deepesh ",lastName:"sharma "})
        // yha pr humne spread operator ka use kiya hai isse kya hoga jb bhi hume koi ek value change krwana hai to hum usse use kr sakte hai jiss baki value to vesi hai rahe lekin jo
        // value hume change krnawana hai wo hum change kr sake 
    }
  return (
   <>
    <h1>Now we  will learn use states use in objects </h1>
    <h2>my name is {Current_name.firstname} and  last name will be {Current_name.lastName}</h2>
{/* yha kya hoga mai apna name chanage karunga na direct to nahi hoga  */}
     <button className='btn' onClick={bhavesh}>change here </button>
   </>
  )
}

export default UseState_Object