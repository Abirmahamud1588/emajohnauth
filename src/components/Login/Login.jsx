import React, { useContext, useState } from 'react';
import './Login.css'
import { AuthContext } from '../Providers/AuthPorviders';
const Login = () => {

    const [error, setError] = useState('');

    const {signIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        setError('');
        signIn(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            setError(error.message)
        })

    }
    return (

        <div>
            <div className='formdiv'>
            <form action="" onSubmit={handleLogin}>

                <input type="email" name="email" id="" placeholder='enter your email' />
                <input type="password" name="password" id="" placeholder='enter your password' />
                <input type="submit" value="Login" />
                {/* <button style={{display:'block', width:'400px', marginTop :'20px', background: 'blue'}}>Login</button> */}
            </form>
        </div>
        </div>
    );
};

export default Login;