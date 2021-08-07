import styled from "styled-components";

const DeckStatusDiv = styled.div`
`

const DeckStatusComponent = () => {
    return (
        <DeckStatusDiv>
            <h2 className="ui center aligned icon header">
                <i className="book icon"></i>
                Deck Status
            </h2>
        </DeckStatusDiv>
    );
}

export default DeckStatusComponent;