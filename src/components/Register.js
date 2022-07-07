import React from 'react'

const userRegister = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("this is your event", event);
        registerPerson(event);
        const backFromAPI = await registerPerson(event);
      }
    return (
        <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input id="username" placeholder="username"></input>
        <label>Password</label>
        <input id="password" placeholder="password"></input>
        <button>Register</button>
      </form>
    )
}

export default userRegister