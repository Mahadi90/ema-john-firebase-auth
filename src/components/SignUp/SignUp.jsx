import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState('')

    const {createUser} = useContext(AuthContext)
    // console.log(createUser)
    const [show, setShow] =useState(false)
    const handleSignUp = event => {

      event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;
        
        console.log(email, password, confirmPass)


        setError('')

        if(password !== confirmPass){
            setError('Your password did not match!')
            return;
        }else if(password.length < 6){
            setError('Your password must be 6 character')
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggededUser = result.user;
            console.log(loggededUser)
        })
        .catch(error => {
            console.log(error)
            setError(error)
        })
    }
    return (
        <div>
            <form onSubmit={handleSignUp} className="form-container">
                <h2>Sign Up</h2>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type={show ? 'text' : "password"} name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type={show ? 'text' : "password"} name="confirm" required />
                    <p className='show-pass' onClick={() => setShow(!show)}>
                        <span>{
                            show?   "Hide PAssword": "Show Password"
                            }
                        </span>
                    </p>
                    <p><small>Already have an account? Please <Link className='link-btn' to='/login'>LogIn</Link></small></p>
                </div>
                <div className="form-control">
                    <input type="submit" className='btn btn-submit'  required />
                </div>
                <p className='error'><small>{error}</small></p>
            </form>
        </div>
    );
};

export default SignUp;