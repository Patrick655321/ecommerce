import styled from "styled-components";
import { useState } from "react";
import axios from "axios";


import Title from "./styled/Title"
import { useGlobalContext } from "./utils/globalStateContext";


const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 400px;
    margin-bottom: 10px ;
`



function Login() {
    let haveError = false
    const [user, setUser] = useState({
        username: "",
        //mor_2314
        password: ""
        //83r5^_
    })

    const [error, setError] = useState({
        username: null,
        password: null,
        apiError: null
    })

    // const [userFetched, setUserFetched] = useState(false)

    //GLOBALSTATE
    const {store, dispatch } = useGlobalContext()

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!user.username) {
            setError((prevError) => {
                return {
                    ...prevError,
                    username: "Username must be provided"
                }
            })
            haveError = true
        }
        if(!user.password) {
            setError((prevError) => {
                return {
                    ...prevError,
                    password: "Password must be provided"
                }
            })
            haveError = true
        }
        if(!haveError) {
            setError({
                username: null,
                password: null
            })
        console.log(user)
        axios.post("/auth/login", user)
        .then((res) => res.data)
        .then((json) => {
            // setUserFetched(true)
            // localStorage.setItem("token", json.token) //STORING TOKEN FROM LOGIN!
            dispatch({
                type: 'setToken',
                data: json.token
            })
            dispatch({
                type: 'setLoggedInUsername',
                data: user.username
            })
            console.log(json)
        })
        .catch(() => { //error put in manually so not required in callback
            setError((prev) => {
                return {
                    ...prev,
                    apiError: "Invalid username and/or password"
                }
            })
        })
    }
}

    const handleOnChange = (event) => {
        setUser((prevUser) => {
            return {
                ...prevUser,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
        <>
        {store.loggedInUsername ? 
        <Title>Logged In</Title> :
        <div>
            <Title>Login</Title>
            <form style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
                }}
                onSubmit={handleSubmit}
                >
                    <InputWrapper>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={user.username} onChange={handleOnChange}/>
                    </InputWrapper>
                    {error.username}
                    <InputWrapper>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleOnChange}/>
                    </InputWrapper>
                    {error.password}
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                    {error.apiError}

                </form>
        </div>
        }
        </>
    )
}

export default Login