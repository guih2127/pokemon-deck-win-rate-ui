import { useEffect } from "react";
import styled from "styled-components";
import SelectComponent from "./formComponents/SelectComponent";

const DeckDetailsDiv = styled.div`
`

const DeckDetailsComponent = ({ currentDeck, decks, setCurrentDeck }) => {
    useEffect(() => {
        console.log('entrou');
        console.log(currentDeck);
    }, [currentDeck]);

    return (
        <DeckDetailsDiv>
            <h2 className="ui center aligned icon header">
                <i className="file alternate icon"></i>
                Deck Details
            </h2>
            <SelectComponent 
                options={decks} 
                selectedOption={currentDeck} 
                label="Decks"
                setSelectedOption={setCurrentDeck}
            />
        </DeckDetailsDiv>
    );
}

export default DeckDetailsComponent;