import { useState } from "react";
import styled from "styled-components";
import InsertMatchModal from "./InsertMatchModal";
import moment from 'moment';

const MatchListDiv = styled.div`
`

const DeckNameSpan = styled.span`
    font-weight: bolder;
`

const ButtonInsertMatch = styled.div`

`

const MatchListComponent = ({ currentDeck, decks, matches, setMatches }) => {
    const [showInsertMatchModal, setShowInsertMatchModal] = useState(false);

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
        let date = moment(match.date).format('DD/MMYYYY')
        return (
            <div className="item" key={match.id}>
                {renderIcon(match)}
                <div className="content">
                    <a className="header" href="/">
                        {date}
                    </a>
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
            <div
                className="ui raised very padded text container segment"
                style={{ height: '70vh', overflowX: 'scroll' }}
            >
                <MatchListDiv>
                    <ButtonInsertMatch>
                        <button
                            className="ui secondary button"
                            onClick={() => setShowInsertMatchModal(true)}
                        >
                            Add Match
                        </button>
                    </ButtonInsertMatch>
                    <div className="ui list">
                        {renderMatches}
                    </div>
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