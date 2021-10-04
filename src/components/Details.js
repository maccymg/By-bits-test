import React from 'react'
import axios from 'axios'

function Details() {

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/endpoint') // * <-- replace with your endpoint
      console.log(res.data)
    }
    getData()
  })

  return (
    <h1>Details</h1>
  )
}


export default Details
