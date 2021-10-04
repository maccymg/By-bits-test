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
      console.log(formdata)
      const { data } = await loginUser(formdata)
      console.log(data.access_token)
      setToken(data.access_token)
      history.push('/policy-details')
    } catch (err) {
      console.log('error')
    }
  }

  console.log(formdata)

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          onChange={handleChange}
          name="username"
          value={formdata.username}
        />
        <input
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formdata.password}
        />
        <div className="field">
          <button type="submit" className="button is-fullwidth is-warning">Log Me In!</button>
        </div>
      </form>
    </>
  )
}


export default Login