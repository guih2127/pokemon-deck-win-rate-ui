import { useEffect, useState } from "react";
import styled from "styled-components";
import matchService from '../services/MatchService';

const MatchListDiv = styled.div`

`

const DeckNameSpan = styled.span`
    font-weight: bolder;
`

const MatchListComponent = ({ deck }) => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        retrieveMatchs();
    }, [deck]);

    const retrieveMatchs = async () => {
        await matchService.getMatchsByDeckId(deck.id)
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
                            {deck.name}
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
        <MatchListDiv>
            <h2 className="ui center aligned icon header">
                <i className="gamepad icon"></i>
                Last Matches
            </h2>
            <div className="ui list">
                {renderMatches}
            </div>
            <button class="ui secondary button">
                Add Match
            </button>
        </MatchListDiv>
    );
};

export default MatchListComponent;