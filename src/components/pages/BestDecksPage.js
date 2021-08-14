import { useEffect, useState } from "react";
import deckService from "../../services/DeckService";
import BestDecksListComponent from "../BestDecksListComponent";

const BestDecksPage = () => {
    const [bestDecks, setBestDecks] = useState([]);

    const retrieveBestDecks = async() => {
        await deckService.getBestDecks()
            .then(response => {
                setBestDecks(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        retrieveBestDecks();
    }, []);

    return (
        <BestDecksListComponent bestDecks={bestDecks} />
    );
};

export default BestDecksPage;