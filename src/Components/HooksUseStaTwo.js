import React, { useState } from 'react'

function HooksUseStaTwo() {
  const initialCount = 0
  const[count, setCount] = useState(initialCount)
  return (
    <div>
      Count:{count}
      <button onClick={()=>setCount(count+1)}> increment</button>
      <button onClick={()=>setCount(count-1)}> decrement</button>
      <button onClick={()=>setCount(initialCount)}> reset</button>
    </div>
  )
}

export default HooksUseStaTwo