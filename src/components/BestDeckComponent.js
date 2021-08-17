const BestDeckComponent = ({ deck }) => {

    return (
        <div className="item" key={deck.id} style={{cursor: 'pointer'}}>
            {deck.id}
            <div className="content">
                <div className="header">{deck.name}</div>
                <div>Wins: {deck.matchesWon}</div>
                <div>Loses: {deck.matchesLost}</div>
                <div>Win Percentage: {deck.winPercentage}</div>
            </div>
        </div>
    );

};

export default BestDeckComponent;