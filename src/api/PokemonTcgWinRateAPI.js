import axios from "axios";

const pokemonTcgWinRateAPI = axios.create({
    baseURL: "https://localhost:44352",
    headers: {
        "Content-type": "application/json"
    }
});

pokemonTcgWinRateAPI.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.authorization = `Bearer ${token}`;

    return config;
})

export default pokemonTcgWinRateAPI;