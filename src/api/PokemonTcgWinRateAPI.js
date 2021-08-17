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

pokemonTcgWinRateAPI.interceptors.response.use(
    response => responseSuccessHandler(response),
    error => responseErrorHandler(error)
);

const responseSuccessHandler = response => {
    return response;
};

const responseErrorHandler = error => {
    if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    return Promise.reject(error);
}

export default pokemonTcgWinRateAPI;