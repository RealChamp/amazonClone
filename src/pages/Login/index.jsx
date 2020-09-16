import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
      <div className={classes.login}>
        <Link to="/">
          <img
            className={classes.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
            alt="logo"
          />
        </Link>
        <div className={classes.container}>
          <h1>Sign in</h1>

          <form className={classes.loginForm}>
            <p>
              <label for="email">E-mail</label>
              <input type="text" name="email" id="email" />
            </p>
            <p>
              <label for="pass">Password</label>
              <input type="password" name="password" id="pass" />
            </p>
            <button className={classes.signIn}>Sign in</button>
          </form>
          <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          <button className={classes.register}>Create new account</button>
        </div>
      </div>
    );
}

export default Login
