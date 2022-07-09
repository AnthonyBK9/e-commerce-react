import React from 'react'

const UserLogged = () => {
  return (
    <article className="login__form">
      <div className="user-logged">
        <i className="fa-solid fa-user-check"></i>
      </div>
      <div className="user">
        <h2>User Logged</h2>
      </div>
      <button className="login-btn-out">Sign out</button>
    </article>
  )
}

export default UserLogged