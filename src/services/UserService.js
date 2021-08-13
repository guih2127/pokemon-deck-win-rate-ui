import PokemonTcgWinRateAPI from "../api/PokemonTcgWinRateAPI";

const Login = async(user) => {
    return await PokemonTcgWinRateAPI.post(`login`, user);
};

const Register = async(user) => {
    return await PokemonTcgWinRateAPI.post(`register`, user)
};

const UserService = {
    Login,
    Register
};

export default UserService;