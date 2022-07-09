import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogged = () => {
  const navigate = useNavigate()
  const singOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <article className="login__form">
      <div className="user-logged">
        <i className="fa-solid fa-user-check"></i>
      </div>
      <div className="user">
        <h2>User Logged</h2>
      </div>
      <button className="login-btn-out" onClick={singOut}>Sign out</button>
    </article>
  )
}

export default UserLogged