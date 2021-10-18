import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../firebase/UseAuth';

const Login = () => {
    const {googleSignIn} = useAuth();
    return (
        <div className='d-flex justify-content-cennter'>
            <div>
            <input type="email" name="" placeholder='enter your email' id="" /><br />
            <input type="password" name="" placeholder='enter your password' id="" /><br />
            <br />
            <button className="btn btn-primary" type="submit">Submit</button><br /><br />
            <button className="btn btn-primary" type="submit" onClick={googleSignIn}>Google sign in</button><br />
            <Link to='/register'>ALready resitered?</Link>
            </div>

           
        </div>
    );
};

export default Login;