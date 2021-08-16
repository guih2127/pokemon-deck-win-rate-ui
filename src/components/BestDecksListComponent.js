import BestDeckComponent from "./BestDeckComponent";

const BestDecksListComponent = ({ bestDecks }) => {
    const renderedDecks = bestDecks.map((deck, index) => {
        return <BestDeckComponent deck={deck} index={index} key={deck.id} />;
    });

    return (
        <div
            className="ui celled list"
            style={{ 
                marginLeft: '30%', 
                marginRight: '30%', 
                padding: '30px', 
                height: '75vh', 
                overflowY: 'scroll',
                overflowX: 'hidden',
                marginTop: '60px'
            }}
        >
            {renderedDecks}
        </div>
    );
};

export default BestDecksListComponent;