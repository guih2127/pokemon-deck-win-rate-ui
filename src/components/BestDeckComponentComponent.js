import { useEffect, useState } from "react";
import cardService from "../services/CardService";

const BestDeckComponent = ({ deck, index }) => {
    const [deckDetails, setDeckDetails] = useState(null);

    useEffect(() => {
        retrieveCardById(deck);
    }, []);

    const retrieveCardById = async (deck) => {
        await cardService.getCardById(deck.firstPokemonExternalId)
            .then(response => {
                setDeckDetails(response.data.data[0]);
                console.log(deckDetails);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const renderImage = () => {
        if (deckDetails) {
            return (
                <img
                    src={deckDetails.images.small}
                    alt=""
                    className="ui avatar image"
                >
                </img>
            );
        }
    }

    return (
        <div className="item" key={deck.id}>
            {index + 1}
            <div className="content">
                <div className="header">{deck.name}</div>
                <div>Wins: {deck.matchesWon}</div>
                <div>Loses: {deck.matchesLost}</div>
                <div>Win Percentage: {deck.winPercentage}</div>
            </div>
        </div>
    );

};

export default BestDeckComponent;