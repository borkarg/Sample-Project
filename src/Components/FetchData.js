import React, { useEffect } from 'react'
import axios from 'axios'

function FetchData() {
    const[post, setPost] = useState({})
    useEffect(()=>{
        axios
        .get("")
        .then(res=>{
          console.log(res)
          setPost(res.data)
        })
        .catch(err=>{
          console.log(err)
        })

    })
  return (
    <div>

    </div>
  )
}

export default FetchData