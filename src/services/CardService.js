import PokemonTcgDevelopersAPI from "../api/PokemonTcgDevelopersAPI";

const getCardById = async (cardId) => {
    return await PokemonTcgDevelopersAPI.get("/cards", {
        params: {
            q: `id:${cardId}`
        }
    });
};

const cardService = {
    getCardById
}

export default cardService;