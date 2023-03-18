import React, {useState} from 'react'

const Home = () => {

const [user, setUser] = useState({name: "", email: ""})


  return (
    <div className="container mt-4">
        <input className="form-control mb-3" />
        <input className="form-control mb-4" />
    <div>Name: {user.name}</div>
    <div>Email: {user.email}</div>
    </div>
  )
}


export default Home
