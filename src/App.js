import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./components/FooterComponent";
import DeckStatusPage from "./components/pages/DeckStatusPage"
import LoginPage from "./components/pages/LoginPage";

function isUserLoggedIn() {
    if (localStorage.getItem("token")) {
        return true;
    }

    return false;
};

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/DeckStatus">Deck Status</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/DeckStatus">
                    <DeckStatus />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

function Login() {
    return (
        <div>
            <LoginPage />
            <Footer />
        </div>
    );
};

function DeckStatus() {
    if (!isUserLoggedIn()) {
        return Login();
    }

    return (
        <div>
            <DeckStatusPage />
            <Footer />
        </div>
    );
};

export default App;