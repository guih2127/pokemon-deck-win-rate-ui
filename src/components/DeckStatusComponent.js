import styled from "styled-components";

const DeckNameDiv = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 25ch;
  text-align: left !important;
`

const DeckStatusDiv = styled.div`
`

const DeckStatusComponent = ({ currentDeckStatus }) => {

    const renderDeckStatus = () => {
        return (
            <div className="ui raised very padded text container segment" style={{height: '70vh'}}>
                <DeckStatusDiv>
                    <div className="ui horizontal statistics">
                        <div className="statistic">
                            <div className="value">
                                {currentDeckStatus.winPercentage} %
                            </div>
                            <div className="label">
                                Win Percentage
                            </div>
                        </div>
                        <div className="statistic" style={{ display: 'grid' }}>
                            <div className="label" style={{textAlign: 'left'}}>
                                Best Match
                            </div>
                            <DeckNameDiv className="value">
                                {currentDeckStatus.bestMatch ?
                                    currentDeckStatus.bestMatch.name : 'Jogue mais para calcular. :('}
                            </DeckNameDiv>
                        </div>
                        <div className="ui green statistic">
                            <div className="value">
                                {currentDeckStatus.bestMatchWinPercentage}%
                            </div>
                            <div className="label">
                                Best Match Win Percentage
                            </div>
                        </div>

                        <div className="statistic" style={{ display: 'grid' }}>
                            <div className="label" style={{textAlign: 'left'}}>
                                Worst Match
                            </div>
                            <DeckNameDiv className="value">
                                {currentDeckStatus.worstMatch ?
                                    currentDeckStatus.worstMatch.name : 'Jogue mais para calcular. :('}
                            </DeckNameDiv>
                        </div>
                        <div className="ui red statistic">
                            <div className="value">
                                {currentDeckStatus.worstMatchWinPercentage}%
                            </div>
                            <div className="label">
                                Worst Match Win Percentage
                            </div>
                        </div>
                    </div>
                </DeckStatusDiv>
            </div>
        )
    }

    return (
        <DeckNameDiv>
            <h2 className
                ="ui center aligned icon header">
                <i className
                    ="book icon"></i>
                Deck Status
            </h2>

            {renderDeckStatus()}
        </DeckNameDiv>
    );
}

export default DeckStatusComponent;