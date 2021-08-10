import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SelectComponent from '../components/formComponents/SelectComponent';
import FirstToPlayOptions from '../options/FirstToPlayOptions';
import WinOptions from '../options/WinOptions';
import matchService from '../services/MatchService';

const ModalDiv = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 20%;
    bottom: 0;
    display: flex;
    align-content: center;
    justify-content: center;
`

const ModalContent = styled.div`
    width: 500px;
    background-color: white;
    border: 2px solid #212121;
    height: 550px;
    padding: 30px;
    border-radius: 10px;
`

const ModalHeader = styled.div`
    padding: 10px;
`

const ModalBody = styled.div`
    padding: 10px;
    border-top: 2px solid #212121;
    border-bottom: 2px solid #212121;
`

const FormDiv = styled.div`
    margin-bottom: 15px;
`

const InsertMatchModal = ({ show, onClose, currentDeck, decks, setMatches }) => {
    const [currentPlayedDeck, setcurrentPlayedDeck] = useState(decks[0]);
    const [currentOpponentDeck, setcurrentOpponentDeck] = useState(decks[0]);
    const [win, setWin] = useState(WinOptions[0]);
    const [firstToPlay, setfirstToPlay] = useState(FirstToPlayOptions[0]);

    useEffect(() => {
        setcurrentPlayedDeck(currentDeck);
    }, [currentDeck, decks]);

    if (show === false) {
        return null;
    }

    const retrieveMatchs = async () => {
        await matchService.getMatchsByDeckId(currentDeck.id)
            .then(response => {
                setMatches(response.data);
                onClose();
            })
            .catch(error => {
                console.log(error);
            })
    };

    const insertMatch = async () => {
        const body = {
            win: win.value,
            firstTurn: firstToPlay.value,
            usedDeckId: currentPlayedDeck.id,
            opponentDeckId: currentOpponentDeck.id
        };

        await matchService.insertMatch(body)
            .then(response => {
                retrieveMatchs();
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <ModalDiv id="insert-match-modal">
            <ModalContent>
                <ModalHeader>
                    <h4>Insert Match</h4>
                </ModalHeader>
                <ModalBody>
                    <FormDiv>
                        <SelectComponent
                            options={decks}
                            selectedOption={currentPlayedDeck}
                            label="Current Played Deck"
                            setSelectedOption={setcurrentPlayedDeck}
                        />
                    </FormDiv>
                    <FormDiv>
                        <SelectComponent
                            options={decks}
                            selectedOption={currentOpponentDeck}
                            label="Opponent Deck"
                            setSelectedOption={setcurrentOpponentDeck}
                        />
                    </FormDiv>
                    <FormDiv>
                        <SelectComponent
                            options={WinOptions}
                            selectedOption={win}
                            label="Result"
                            setSelectedOption={setWin}
                        />
                    </FormDiv>
                    <FormDiv>
                        <SelectComponent
                            options={FirstToPlayOptions}
                            selectedOption={firstToPlay}
                            label="First turn to play"
                            setSelectedOption={setfirstToPlay}
                        />
                    </FormDiv>
                </ModalBody>
                <ModalHeader>
                    <button
                        className="ui secondary button"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <button
                        className="ui secondary button"
                        onClick={insertMatch}>
                        Insert Match
                    </button>
                </ ModalHeader>
            </ ModalContent>
        </ModalDiv>
    )
};

export default InsertMatchModal;