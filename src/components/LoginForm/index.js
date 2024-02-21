import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', ongetErrorMsg: false}

  onSubmitChanges = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({errorMsg, ongetErrorMsg: true})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg, ongetErrorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
          className="website-logo"
        />
        <div className="login-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <form className="form-container" onSubmit={this.onSubmitChanges}>
            <div className="username-container">
              <label htmlFor="username" className="label-text">
                USERNAME
              </label>
              <input
                type="name"
                id="username"
                placeholder="username"
                className="input"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="password-container">
              <label htmlFor="password" className="label-text">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                className="input"
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          {ongetErrorMsg && <p className="error-msg">*{errorMsg}</p>}
        </div>
      </div>
    )
  }
}
export default LoginForm
