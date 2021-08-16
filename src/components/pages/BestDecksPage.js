import { useEffect, useState } from "react";
import deckService from "../../services/DeckService";
import BestDecksListComponent from "../BestDecksListComponent";
import PaginationComponent from "../PaginationComponent";

const BestDecksPage = () => {
    const [bestDecks, setBestDecks] = useState([]);

    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalItens, setTotalItens] = useState(null);
    const [totalPages, setTotalPages] = useState(null);

    const retrieveBestDecks = async() => {
        await deckService.getBestDecks(pageNumber, pageSize)
            .then(response => {
                setBestDecks(response.data.data);
            
                setTotalItens(response.data.totalRecords);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        retrieveBestDecks();
    }, [pageNumber, pageSize]);

    return (
        <div>
            <BestDecksListComponent bestDecks={bestDecks} />
            <PaginationComponent
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalItens={totalItens}
                totalPages={totalPages}
            />
        </div>
    );
};

export default BestDecksPage;