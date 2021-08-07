import PokemonTcgWinRateAPI from "../api/PokemonTcgWinRateAPI";

const getDecks = async () => {
    return await PokemonTcgWinRateAPI.get("/decks");
};

const deckService = {
    getDecks
}

export default deckService;