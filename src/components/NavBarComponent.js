import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    let history = useHistory();

    const Logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        history.push('/Login');
    }

    const NavBarDiv = styled.div`
        background-color: #212121;
        display: flex;
        padding: 30px;
    `
    const NavBarA = styled.a`
        color: white;
        font-size: 2em;
        cursor: pointer;
        margin-right: 1em;
    `

    const NavBarLogoutA = styled.a`
        color: white;
        font-size: 2em;
        cursor: pointer;
        margin-left: auto;
    `

    return (
        <NavBarDiv>
                <Link to="/DeckStatus">
                    <NavBarA>Deck Status</NavBarA>
                </Link>
                <NavBarLogoutA onClick={e => Logout()}>
                    Logout
                </NavBarLogoutA>
        </NavBarDiv>
    );
};

export default NavBar;