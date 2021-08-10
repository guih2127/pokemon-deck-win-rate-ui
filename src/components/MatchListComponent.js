import { useEffect, useState } from "react";
import styled from "styled-components";
import matchService from '../services/MatchService';
import InsertMatchModal from "./InsertMatchModal";

const MatchListDiv = styled.div`
`

const DeckNameSpan = styled.span`
    font-weight: bolder;
`

const ButtonInsertMatch = styled.div`
    margin-top: 100%;
`

const MatchListComponent = ({ currentDeck, decks }) => {
    const [matches, setMatches] = useState([]);
    const [showInsertMatchModal, setShowInsertMatchModal] = useState(false);

    useEffect(() => {
        retrieveMatchs();
    }, [currentDeck]);

    useEffect(() => {
        if (showInsertMatchModal) {
            document.body.style.overflow = 'hidden';
        }
    }, [showInsertMatchModal]);

    const retrieveMatchs = async () => {
        await matchService.getMatchsByDeckId(currentDeck.id)
            .then(response => {
                setMatches(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const renderIcon = (match) => {
        if (match.win) {
            return (
                <i className="smile outline icon"></i>
            );
        };

        return (
            <i className="frown icon"></i>
        );
    };

    const renderMatches = matches.map((match, index) => {
        return (
            <div className="item" key={index}>
                {renderIcon(match)}
                <div className="content">
                    <a className="header" href="/">Match {index + 1}</a>
                    <div className="description">
                        <DeckNameSpan>
                            {currentDeck.name}
                            &nbsp;&nbsp;
                        </DeckNameSpan>
                        Versus
                        <DeckNameSpan>
                            &nbsp;&nbsp;
                            {match.opponentDeck.name}
                        </DeckNameSpan>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <h2 className="ui center aligned icon header">
                <i className="gamepad icon"></i>
                Last Matches
            </h2>
            <div className="ui raised very padded text container segment">
                <MatchListDiv>
                    <div className="ui list">
                        {renderMatches}
                    </div>
                    <ButtonInsertMatch>
                        <button
                            className="ui secondary button"
                            onClick={() => setShowInsertMatchModal(true)}
                        >
                            Add Match
                        </button>
                    </ButtonInsertMatch>
                    <InsertMatchModal
                        show={showInsertMatchModal}
                        onClose={() => setShowInsertMatchModal(false)}
                        setMatches={setMatches}
                        currentDeck={currentDeck}
                        decks={decks}
                    />
                </MatchListDiv>
            </div>
        </div>

    );
};

export default MatchListComponent;