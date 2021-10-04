import React from 'react'
import { getDetails } from '../lib/api'

function Details() {

  const [details, setDetails] = React.useState(null)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getDetails()
        const token = window.localStorage.getItem('token')
        if (!token) {
          setError(true)
        }
        setDetails(data)
      } catch (err) {
        console.log('err')
      }
    }
    getData()
  }, [])

  console.log(details)

  return (
    <>
      {error ?
        <div>401 Error - You are not Authorized</div>
        :
        <h1>Details</h1>
      }
    </>
  )
}


export default Details
