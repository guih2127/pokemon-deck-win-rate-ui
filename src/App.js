import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./components/FooterComponent";
import NavBar from "./components/NavBarComponent";
import BestDecksPage from "./components/pages/BestDecksPage";
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
        <div id="app">
            <BrowserRouter>
                <Switch>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path="/DeckStatus">
                        <DeckStatus />
                    </Route>
                    <Route path="/BestDecks">
                        <BestDecks />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
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

const BestDecks = () => {
    if (!isUserLoggedIn()) {
        return Login();
    }

    return (
        <div>
            <NavBar />
            <BestDecksPage />
            <Footer />
        </div>
    );
}

export default App;