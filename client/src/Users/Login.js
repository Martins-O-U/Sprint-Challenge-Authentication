import React, { useState } from "react";
import axios from "axios";

const Login = props => {
    const [ User, setUser ] = useState({ username: "", password: ""})

    const handleChange = event => {
        const { name, value } = event.target;
        setUser({...User, [name]: value})
    }

    const UserSubmit = (event, loginInfo) => {
        event.preventDefault();
        axios.post("http://localhost:3300/api/auth/login", loginInfo)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                props.history.push("/jokes")
            })
            .catch(error => {
                console.log("Something went wrong", + error.message)
            })
    }

    return (
        <div>
            <h1 className='intro'>Welcome to the Login Page</h1>
            <form onSubmit={(e) => UserSubmit(e, User)}>
                <h3>Please Enter your Login Details</h3>
                <div>
                    <label>
                        Username: 
                        <input name="username" value={User.username} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password: 
                        <input name="password" value={User.password} onChange={handleChange} />
                    </label>
                </div>
                <button className='button-submit'>Submit</button>
            </form>
        </div>
    );
}

export default Login; 