import BestDeckComponent from "./BestDeckComponentComponent";

const BestDecksListComponent = ({ bestDecks }) => {
    const renderedDecks = bestDecks.map((deck, index) => {
        return <BestDeckComponent deck={deck} index={index} key={deck.id} />;
    });

    return (
        <div
            className="ui celled list"
            style={{ marginLeft: '30%', marginRight: '30%', padding: '30px' }}
        >
            {renderedDecks}
        </div>
    );
};

export default BestDecksListComponent;