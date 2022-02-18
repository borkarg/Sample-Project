import React, { useState } from 'react'

function UseStateThree() {
    const[name,setName] = useState({firstName:"", lastName:""})
  return (
    <div>
        <input type='text' value={name.firstName} onChange={e=>setName({firstName:e.target.value})}/>
        <input type='text' value={name.lastName} onChange={e=>setName({lastName:e.target.value})}/>
        <input type='text' value={name.firstName} onChange={e=>setName({firstName:e.target.value})}/>
    </div>
  )
}

export default UseStateThree