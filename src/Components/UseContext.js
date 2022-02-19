import React, { useContext } from 'react'
import {UserContext, User2Context} from '../App'

function UseContext() {
    const user = useContext(UserContext)
    const user2 = useContext(User2Context)
  return (
    <div>{user} - {user2}</div>
  )
}

export default UseContext