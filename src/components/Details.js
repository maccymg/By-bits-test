import React from 'react'
import { getDetails } from '../lib/api'
import { Link } from 'react-router-dom'

function Details() {

  const [details, setDetails] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getDetails()
        const token = window.localStorage.getItem('token')
        if (token) {
          setDetails(data)
        }
      } catch (err) {
        console.log('err')
      }
    }
    getData()
  }, [])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
  }


  return (
    <>
      {details ?
        <>
          <header className="logout-container">
            <Link onClick={handleLogout} className="back-to-login" to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="details-sub-heading">Log Out</div>
            </Link>
          </header>
          <div className="details-container">
            <div className="details-header">
              <div className="header">My Policy</div>
            </div>
            <main className="policy-details">
              <p className="details-sub-heading">Policy Reference:</p>
              <p className="details-info">{details.policy.policy_reference}</p>

              <p className="details-sub-heading">Cover Type:</p>
              <p className="details-info">{details.policy.cover}</p>

              <p className="details-sub-heading">Car:</p>
              <p className="details-info">{`${details.vehicle.make} ${details.vehicle.model} `}<span className="color">{details.vehicle.colour}</span>{`-${details.vehicle.reg}`}</p>

              <p className="details-sub-heading">Address:</p>
              <p className="details-info">{`${details.policy.address.line_1}, ${details.policy.address.line_2}, ${details.policy.address.postcode}`}</p>
            </main>
          </div>
        </>
        :
        <div className="details-container">
          <div className="header">401 Error - You are not Authorized</div>
          <Link className="back-to-login" to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <div className="details-sub-heading">Back to Login</div>
          </Link>
        </div>
      }
    </>
  )
}


export default Details
