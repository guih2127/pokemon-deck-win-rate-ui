import BestDeckComponent from "./BestDeckComponent";

const BestDecksListComponent = ({ bestDecks }) => {
    const renderedDecks = bestDecks.map((deck, index) => {
        return <BestDeckComponent deck={deck} index={index} key={deck.id} />;
    });

    return (
        <div
            className="ui celled list"
            style={{ 

                padding: '30px', 
                height: '75vh',
                overflowY: 'scroll',
                overflowX: 'hidden',
            }}
        >
            {renderedDecks}
        </div>
    );
};

export default BestDecksListComponent;