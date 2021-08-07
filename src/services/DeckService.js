import PokemonTcgWinRateAPI from "../api/PokemonTcgWinRateAPI";

const getDecks = async () => {
    return await PokemonTcgWinRateAPI.get("/decks");
};

const getDeckStatusByDeckId = async (deckId) => {
    return await PokemonTcgWinRateAPI.get(`/decks/${deckId}/status`);
}

const deckService = {
    getDecks,
    getDeckStatusByDeckId
}

export default deckService;