import React, { useContext, useState } from 'react';
import './signup.css'
import { AuthContext } from '../Providers/AuthPorviders';

const Signup = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const hadleSignup = event =>{
        event.preventDefault();
        const email = event.target.email.value;   
        const password = event.target.password.value; 
        const confirmpassword = event.target.confirmpassword.value; 
        console.log(email, password,confirmpassword); 

        setError('');

        if (password != confirmpassword){
            setError('password & confirm password doesnot match');
            return;
        }
        else if (password.length <6){
            setError('password is weak');
            return;

        }
        event.target.reset();
        createUser(email,password)
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
            <form onSubmit={hadleSignup} action="">

                <input type="email" name="email" id="" placeholder='enter your email' />
                <input type="password" name="password" id="" placeholder='enter your password' />
                <input type="password" name="confirmpassword" id="" placeholder='enter your given password' />
                <input type="submit" value="SignUP" />
                {/* <button style={{display:'block', width:'400px', marginTop :'20px', background: 'blue'}}>Login</button> */}
            </form>
           
           
        </div>
        <p style={{color:'red' , display:'block', margin:'auto', width:'500px'}}>{error}</p>
         </div>
        
    );
};

export default Signup;