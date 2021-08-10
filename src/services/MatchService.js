import PokemonTcgWinRateAPI from "../api/PokemonTcgWinRateAPI";

const getMatchsByDeckId = async (deckId) => {
    return await PokemonTcgWinRateAPI.get(`/matches/${deckId}`);
};

const insertMatch = async (match) => {
    return await PokemonTcgWinRateAPI.post(`matches`, match);
}

const matchService = {
    getMatchsByDeckId,
    insertMatch
}

export default matchService;