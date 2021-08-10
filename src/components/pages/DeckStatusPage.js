import DeckDetailsComponent from "../DeckDetailsComponent"
import DeckStatusComponent from "../DeckStatusComponent"
import MatchListComponent from "../MatchListComponent"
import styled from 'styled-components';
import { useEffect, useState } from "react";
import deckService from "../../services/DeckService";
import cardService from "../../services/CardService";
import matchService from "../../services/MatchService";

const DeckStatusPageDiv = styled.div`
    padding: 45px;
`

const DeckStatusPage = () => {
    const [decks, setDecks] = useState([]);
    const [currentDeck, setCurrentDeck] = useState(null);
    const [currentDeckFirstCardDetails, setCurrentDeckFirstCardDetails] = useState(null);
    const [currentDeckStatus, setCurrentDeckStatus] = useState(null);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        retrieveDecks();
    }, []);

    useEffect(() => {
        if (currentDeck) {
            retrieveCardById();
            retrieveDeckStatusByDeckId();
            retrieveMatchs();
        };
    }, [decks, currentDeck]);

    useEffect(() => {
        if (currentDeck) {
            retrieveDeckStatusByDeckId();
        }
    }, [matches]);

    const retrieveDecks = async () => {
        await deckService.getDecks()
            .then(response => {
                setDecks(response.data);
                setCurrentDeck(response.data[0]);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const retrieveCardById = async () => {
        await cardService.getCardById(currentDeck.firstPokemonExternalId)
            .then(response => {
                setCurrentDeckFirstCardDetails(response.data.data[0]);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const retrieveDeckStatusByDeckId = async () => {
        await deckService.getDeckStatusByDeckId(currentDeck.id)
            .then(response => {
                setCurrentDeckStatus(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const retrieveMatchs = async () => {
        await matchService.getMatchsByDeckId(currentDeck.id)
            .then(response => {
                setMatches(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    };

    if (currentDeck && decks && currentDeckFirstCardDetails && currentDeckStatus) {
        return (
            <DeckStatusPageDiv>
                <div className="ui three column grid">
                    <div className="column">
                        <DeckDetailsComponent 
                            currentDeck={currentDeck} 
                            decks={decks} 
                            setCurrentDeck={setCurrentDeck}
                            currentDeckFirstCardDetails={currentDeckFirstCardDetails}
                            currentDeckStatus={currentDeckStatus} 
                        />
                    </div>
                    <div className="column">
                        <DeckStatusComponent
                            currentDeck={currentDeck}
                            currentDeckStatus={currentDeckStatus}
                        />
                    </div>
                    <div className="column">
                        <MatchListComponent 
                            currentDeck={currentDeck} 
                            decks={decks} 
                            matches={matches}
                            setMatches={setMatches}
                        />
                    </div>
                </div>
            </DeckStatusPageDiv>
        );
    }

    return (
        <div></div>
    );
};

export default DeckStatusPage;