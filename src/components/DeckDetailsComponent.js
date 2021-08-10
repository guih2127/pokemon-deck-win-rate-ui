import styled from "styled-components";
import SelectComponent from "./formComponents/SelectComponent";

const DeckDetailsDiv = styled.div`
`

const TextIconSpan = styled.span`
    margin-left: 15px;
`

const DeckStatusDiv = styled.div`
    margin-top: 30px
`

const DeckDetailsComponent = ({ currentDeck, decks, setCurrentDeck, currentDeckFirstCardDetails, currentDeckStatus }) => {

    const renderDeckStatus = () => {
        return (
            <DeckStatusDiv>
                <div className="ui two column grid">
                    <div className="column">
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
                    </div>
                    <div className="column">
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
                    </div>
                </div>
            </DeckStatusDiv>
        )
    }

    return (
        <div>
            <h2 className="ui center aligned icon header">
                <i className="file alternate icon"></i>
                Deck Details
            </h2>
            <div className="ui raised very padded text container segment" style={{height: '75vh'}}>
                <DeckDetailsDiv>
                    <SelectComponent
                        options={decks}
                        selectedOption={currentDeck}
                        label="Decks"
                        setSelectedOption={setCurrentDeck}
                    />

                    {renderDeckStatus()}
                </DeckDetailsDiv>
            </div>
        </div>
    );
}

export default DeckDetailsComponent;