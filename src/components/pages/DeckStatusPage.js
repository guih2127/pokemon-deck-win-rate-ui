import DeckDetailsComponent from "../DeckDetailsComponent"
import DeckStatusComponent from "../DeckStatusComponent"
import MatchListComponent from "../MatchListComponent"
import styled from 'styled-components';
import { useEffect, useState } from "react";
import deckService from "../../services/DeckService";

const DeckStatusPageDiv = styled.div`
    padding: 20px;
`

const DeckStatusPage = () => {
    const [decks, setDecks] = useState([]);
    const [currentDeck, setCurrentDeck] = useState(null);

    useEffect(() => {
        retrieveDecks();
    }, []);

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

    if (currentDeck) {
        return (
            <DeckStatusPageDiv>
                <div className="ui three column grid">
                    <div className="column">
                        <DeckDetailsComponent 
                            currentDeck={currentDeck} 
                            decks={decks} 
                            setCurrentDeck={setCurrentDeck} 
                        />
                    </div>
                    <div className="column">
                        <DeckStatusComponent
                            currentDeck={currentDeck} 
                        />
                    </div>
                    <div className="column">
                        <MatchListComponent deck={currentDeck} />
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