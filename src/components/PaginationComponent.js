import { useEffect, useState } from "react";
import PageSizeOptions from '../options/PageSizeOptions';

const PaginationComponent = ({
    pageNumber,
    setPageNumber,
    pageSize,
    setPageSize,
    totalItens,
    totalPages
}) => {
    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        renderedButtons();

        return () => {
            renderedButtons();
        };
    }, [pageNumber, totalPages]);

    const renderedPageSizeOptions = PageSizeOptions.map(pageSizeOption => {
        return (
            <option
                key={pageSizeOption}
                value={pageSizeOption}
                defaultValue={pageSizeOption === pageSize}
            >
                {pageSizeOption}
            </option>
        )
    });

    const renderedButtons = () => {
        let buttons = [];

        if (pageNumber > 1) {
            buttons.push(
                <button
                    className="ui secondary button"
                    onClick={() => setPageNumber(pageNumber - 1)}
                    key={pageNumber - 1}
                    style={{ marginRight: '5px' }}
                >
                    {pageNumber - 1}
                </button>
            );
        }

        buttons.push(
            <button
                className="ui primary button"
                onClick={() => setPageNumber(pageNumber)}
                key={pageNumber}
                style={{ marginRight: '5px' }}
            >
                {pageNumber}
            </button>
        );

        if (pageNumber < totalPages) {
            buttons.push(
                <button
                    className="ui secondary button"
                    onClick={() => setPageNumber(pageNumber + 1)}
                    key={pageNumber + 1}
                >
                    {pageNumber + 1}
                </button>
            );
        }

        setButtons(buttons);
    }

    const changePageSize = value => {
        setPageSize(value);
        setPageNumber(1);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: 'auto' }}>
                <span>N??mero de decks: {totalItens}</span>
                <div>
                    <span>Resultados por p??gina: </span>
                    <select onChange={e => changePageSize(e.target.value)}>
                        {renderedPageSizeOptions}
                    </select>
                </div>
            </div>
            <div>
                {buttons}
            </div>
        </div>
    )
};

export default PaginationComponent;