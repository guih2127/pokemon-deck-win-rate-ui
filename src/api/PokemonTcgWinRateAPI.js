import axios from "axios";

const pokemonTcgWinRateAPI = axios.create({
    baseURL: "https://localhost:44352",
    headers: {
        "Content-type": "application/json"
    }
});

export default pokemonTcgWinRateAPI;