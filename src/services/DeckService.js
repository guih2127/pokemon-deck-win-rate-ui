import PokemonTcgWinRateAPI from "../api/PokemonTcgWinRateAPI";

const getDecks = async () => {
    return await PokemonTcgWinRateAPI.get("/decks");
};

const getDeckStatusByDeckId = async (deckId) => {
    return await PokemonTcgWinRateAPI.get(`/decks/${deckId}/status`);
}

const getBestDecks = async() => {
    return await PokemonTcgWinRateAPI.get('/decks/best-decks')
}

const deckService = {
    getDecks,
    getDeckStatusByDeckId,
    getBestDecks
}

export default deckService;