import React, { useState, useContext } from 'react'
import './signup.css';
import { Link } from 'react-router-dom';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { userContext } from '../../context/context';


const defaultFormField = {
  name: '',
  email: '',
  password: '',
  confirm: ''
}

export default function Signup() {
  //---------------------const---------------------------------
  const [formFields, setFormFields] = useState(defaultFormField);
  const { name, email, password, confirm } = formFields;
const {setCurrentUser } = useContext(userContext);

//-----------------functions-------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   if (password != confirm && confirm != password) {
      alert("Password did not match.");
      return; }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      user.displayName = name;
     const userDocFromDb =  await createUserDocumentFromAuth(user);

      setFormFields(defaultFormField);
      alert("User created successfully");
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already exists.');
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input name="name" value={name} onChange={handleChange} required />
        <input name="email" value={email} onChange={handleChange} required />
        <input name="password" value={password} onChange={handleChange} required />
        <input name="confirm" value={confirm} onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>

      <Link to="/login">Login</Link>
    </div>
  );
}
