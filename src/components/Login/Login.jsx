import React, { useContext } from 'react';
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './Login.css'

const Login = () => {


    const {signIn} = useContext(AuthContext)
    const Navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogIn = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggededUser = result.user;
            console.log(loggededUser)
            form.reset()
            Navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <form onSubmit={handleLogIn} className="form-container">
                <h2>LogIn</h2>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" required />
                    <p><small>Are you new here? Please <Link className='link-btn' to='/signup'>SignUp</Link></small></p>
                </div>
                <div className="form-control">
                    <input type="submit" className='btn btn-submit'  required />
                </div>
            </form>
        </div>
    );
};

export default Login;