
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { updateInfo } from "../redux/actions/userActions";

const App = () => {
  const [newName , setNewName] = useState('')
  const [newEmail , setNewEmail] = useState('')
  const user = useSelector(state=>state)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(updateInfo({name:newName, email:newEmail}))
  },[newEmail, newName])
  return (
    <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={newName} onChange={e=>setNewName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={newEmail} onChange={e=>setNewEmail(e.target.value)} />
        {/* Do not remove the main div */}
      <p>Current values in store:</p>
      <p>Name - {user.name}</p>
      <p>Email - {user.email}</p>
    </div>
  )
}

export default App
