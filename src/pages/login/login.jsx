import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

   
    render() {
         const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(response.user);
    }
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <center>
                        <h1>Login</h1>
                        <input
                            placeholder="Email"
                            type="email" name="email"
                            className="email"
                            value={this.state.email}
                            onChange={this.handleChange} required />

                        <input
                            placeholder='Password'
                            type="password"
                            name="password"
                            className="password"
                            value={this.state.password}
                            onChange={this.handleChange} required />

                    </center>
                    <a href="" className='forgot'>FORGOT YOUR PASSWORD?</a>
                    <input type="submit" value="Log in" className='submit' />
                    <Link to={"/signup"} className='new-account'><button>Sign Up</button></Link>
                </form>
                    <button onClick={logGoogleUser}>Sign In With Google</button>

            </div>
        )

    }
}

export default Login;
