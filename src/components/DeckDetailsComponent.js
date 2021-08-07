import { useEffect, useState } from "react";
import styled from "styled-components";
import CardService from '../services/CardService';
import DeckService from "../services/DeckService";
import SelectComponent from "./formComponents/SelectComponent";
import Loader from "./Loader";

const DeckDetailsDiv = styled.div`
`

const TextIconSpan = styled.span`
    margin-left: 15px;
`

const DeckStatusDiv = styled.div`
    margin-top: 15px;
`

const DeckDetailsComponent = ({ currentDeck, decks, setCurrentDeck }) => {
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [currentDeckFirstCardDetails, setCurrentDeckFirstCardDetails] = useState(null);
    const [currentDeckStatus, setCurrentDeckStatus] = useState(null);

    useEffect(() => {
        setLoadingStatus(true);

        retrieveCardById(currentDeck.id);
        retrieveDeckStatusByDeckId(currentDeck.id);

    }, [currentDeck]);

    useEffect(() => {
        if (currentDeckStatus && currentDeckFirstCardDetails) {
            setLoadingStatus(false);
        };
    }, [currentDeckStatus, currentDeckFirstCardDetails])

    const retrieveCardById = async () => {
        await CardService.getCardById(currentDeck.firstPokemonExternalId)
            .then(response => {
                setCurrentDeckFirstCardDetails(response.data.data[0]);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const retrieveDeckStatusByDeckId = async () => {
        await DeckService.getDeckStatusByDeckId(currentDeck.id)
            .then(response => {
                setCurrentDeckStatus(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const renderDeckStatus = () => {
        return (
            <DeckStatusDiv>
                <div className="ui card">
                    <a className="image" href="/">
                        <img
                            src={currentDeckFirstCardDetails.images.large}
                            alt={currentDeckFirstCardDetails.name}
                        />
                    </a>
                    <div className="content">
                        <a className="header" href="/">
                            {currentDeckFirstCardDetails.name}
                        </a>
                    </div>
                </div>

                <div className="ui horizontal statistics">
                    <div className="statistic">
                        <div className="value">
                            <i className="gamepad icon"></i>
                            <TextIconSpan>{currentDeckStatus.matchesPlayed}</TextIconSpan>
                        </div>
                        <div className="label">
                            Matches Played
                        </div>
                    </div>
                    <div className="statistic">
                        <div className="value">
                            <i className="smile outline icon"></i>
                            <TextIconSpan>{currentDeckStatus.matchesWon}</TextIconSpan>
                        </div>
                        <div className="label">
                            Matches Won
                        </div>
                    </div>
                    <div className="statistic">
                        <div className="value">
                            <i className="frown icon"></i>
                            <TextIconSpan>{currentDeckStatus.matchesLost}</TextIconSpan>
                        </div>
                        <div className="label">
                            Matches Lost
                        </div>
                    </div>
                </div>
            </DeckStatusDiv>
        )
    }

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

            {loadingStatus ? <Loader /> : renderDeckStatus() }
        </DeckDetailsDiv>
    );
}

export default DeckDetailsComponent;