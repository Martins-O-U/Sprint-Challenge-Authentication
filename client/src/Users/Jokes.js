import React, { useEffect, useState } from "react";
import axiosWithAuth from './Auth/AuthwithAxios'


const Jokes = () => {
    const [ jokeList, setJokeList ] = useState([])

    useEffect(() => {
        axiosWithAuth().get("http://localhost:3300/api/jokes")
            .then(res => {
                setJokeList(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <h1 className='intro'>Welcome to Jokes Page.</h1>
            <div className='jokesdiv'>
                {jokeList.map(user => (
                    <div className='jokesdisplay' key={user.id}>
                        <p ><i className='joke'></i>{user.joke}</p>
                    </div>
                ))}
            </div>
        </div>
        );
}

export default Jokes; 