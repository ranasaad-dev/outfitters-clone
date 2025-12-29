import React, {useContext} from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { signInWithGooglePopup, createUserDocumentFromAuth, authUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { userContext } from '../../context/context';


const { currentUser } = useContext(userContext);
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            userDocRef:{}
        }
        
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        //default method to check if user is authenticated using email and password
        const emailResponse = await authUserWithEmailAndPassword(this.state.email, this.state.password);
        if (emailResponse) {
            this.setState({ email: '', password: ''});
            console.log("this is email response", emailResponse);
            //It will fetch the data of user from database and if the user does not exist in database, it will create it.
            const userDataFromDatabase = await createUserDocumentFromAuth(emailResponse.user);
            this.setState({ userDocRef: userDataFromDatabase});
            console.log("this is the user data drom database", userDataFromDatabase);
        }
    }


    render() {
        const logGoogleUser = async () => {
            const googleResponse = await signInWithGooglePopup();
            const userDocRef = await createUserDocumentFromAuth(googleResponse.user);
            this.setState({userDocRef: userDocRef});
            console.log(this.state);
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
                    <input type='submit' value="Log in" className='submit' />
                    <Link to={"/signup"} className='new-account'><button>Sign Up</button></Link>
                </form>
                <button type="button" onClick={logGoogleUser}>Sign In With Google</button>

            </div>
        )

    }
}

export default Login;
