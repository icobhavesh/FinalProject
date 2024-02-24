import React from 'react'
import Preciver from './Preciver'

const Props = () => {
    const send= "here i send props to reciever "
  return (
    <div>
        <h1>Here we learn props </h1>
        <Preciver Sending={send}/>
    </div>
  )
}

export default Props
