import React from 'react'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../lib/api'
import { setToken } from '../lib/auth'

function Login() {
  const history = useHistory()

  const [formdata, setFormdata] = React.useState({
    username: '',
    password: '',
    type: 'USER_PASSWORD_AUTH',
  })

  const handleChange = event => {
    const nextState = { ...formdata, [event.target.name]: event.target.value }
    setFormdata(nextState)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { data } = await loginUser(formdata)
      setToken(data.access_token)
      history.push('/policy-details')
    } catch (err) {
      console.log('error')
    }
  }



  return (
    <>
      <main className="base-container">
        <div className="header">Login</div>
        <div className="form-content">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label className="label">
                <input
                  className="input"
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  value={formdata.username}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="label">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formdata.password}
                />
              </label>
            </div>
            <div className="form-footer">
              <button type="submit" className="button">Log Me In</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}


export default Login