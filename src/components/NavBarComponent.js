import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
    let history = useHistory();

    const Logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    
        history.push('/Login');
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to="/DeckStatus">Deck Status</Link>
                </li>
                <li style={{cursor: 'pointer'}} onClick={e => Logout()}>
                    Logout
                </li>
            </ul>
        </div>
    );
};

export default NavBar;