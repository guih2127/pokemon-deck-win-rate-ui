import PokemonTcgWinRateAPI from "../api/PokemonTcgWinRateAPI";

const getMatchsByDeckId = async (deckId) => {
    return await PokemonTcgWinRateAPI.get(`/matches/${deckId}`);
};

const matchService = {
    getMatchsByDeckId
}

export default matchService;