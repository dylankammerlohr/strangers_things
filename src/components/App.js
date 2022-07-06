import React from 'react'


async function handleSubmit(event) {
    event.preventDefault()
    console.log('this is your event', event)
    registerPerson(event)
    const backFromAPI = await registerPerson(event)
}

export default function App() {
    return(<>
        <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input 
            id="username"
            placeholder="username">
        </input>
        <label>Password</label>
        <input
            id="password"
            placeholder="password">
        </input>
        <button>Login</button>
        </form>
        </>)
}


