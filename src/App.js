import { Link, Route, BrowserRouter, Switch, useHistory } from "react-router-dom";
import Footer from "./components/FooterComponent";
import NavBar from "./components/NavBarComponent";
import DeckStatusPage from "./components/pages/DeckStatusPage"
import LoginPage from "./components/pages/LoginPage";

const isUserLoggedIn = () => {
    if (localStorage.getItem("token")) {
        return true;
    }

    return false;
};

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/DeckStatus">
                    <DeckStatus />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

const Login = () => {
    return (
        <div>
            <LoginPage />
            <Footer />
        </div>
    );
};

const DeckStatus = () => {
    if (!isUserLoggedIn()) {
        return Login();
    }

    return (
        <div>
            <NavBar />
            <DeckStatusPage />
            <Footer />
        </div>
    );
};

export default App;