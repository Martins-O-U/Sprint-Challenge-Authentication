import React, { useState } from "react";
import axios from "axios";


const Register = props => {
    const [ newUser, setNewUser ] = useState({ username: "", password: ""})

    const handleChange = event => {
        const {name, value} = event.target;
        setNewUser({...newUser, [name]: value})
    }

    const handleSubmit = (event, userInfo)=> {
        event.preventDefault();
        axios.post("http://localhost:3300/api/auth/register", userInfo)
            .then(res => {
                props.history.push("/login")
            })
    }

    return (
        <div>
            <h1 className='intro'>Welcome to the Sign_Up page</h1>
            <form onSubmit={e => handleSubmit(e, newUser)}>
                <h3>Please Enter your Required Details</h3>
                <div>
                    <label> 
                        UserName: 
                        <input name="username" value={newUser.username} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password: 
                        <input name="password" value={newUser.password} onChange={handleChange} />
                    </label>
                </div>
                <button className='button-submit'>Submit</button>
            </form>
        </div>
    );
}

export default Register; 