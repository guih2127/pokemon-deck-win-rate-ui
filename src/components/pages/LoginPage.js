import { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonComponent from "../formComponents/ButtonComponent";
import InputComponent from "../formComponents/InputComponent";
import UserService from '../../services/UserService';
import { useHistory, withRouter } from "react-router-dom";

const LoginDiv = styled.div`
    display: grid;
    top: 35%;
    left: 45%;
    position: absolute;
    padding: 30px;
`

const LoginPage = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    let history = useHistory();

    useEffect(() => {

    }, [token]);

    const Login = async () => {
        const body = {
            username: username,
            password: password
        };

        await UserService.Login(body)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user))
                setToken(response.data.token);
                
                history.push("/DeckStatus");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <LoginDiv>
            <h2>Login</h2>
            <InputComponent 
                label="Username"
                value={username}
                setValue={setUserName}
                type="text"
            />
            <InputComponent 
                label="Password"
                value={password}
                setValue={setPassword}
                type="password"
            />
            <ButtonComponent
                label="Logar"
                onClick={Login}
            />
        </LoginDiv>
    );
};

export default LoginPage;