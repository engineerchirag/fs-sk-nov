import { useState, useEffect, useCallback } from 'react';

const Pagination = ({ onPageChange }) => {

    const totalPages = 15;
    const maxVisiblePageCount = 10;

    const [pages, setPages] = useState([]);
    const [activePage, setActivePage] = useState(1);

    const getPages = useCallback((totalPages, maxVisiblePageCount, activePage) => {
        // logic goes here 
        const maxResultSize = totalPages > maxVisiblePageCount ? maxVisiblePageCount : totalPages;
        const startingPage = activePage + maxResultSize > totalPages ? totalPages - maxResultSize + 1 : activePage ;  //
        return [...Array(maxResultSize)].map((_, idx) => {
            return startingPage + idx;
        });
    }, []);

    const changePage = useCallback((e) => {
        let selectedPageNo = 0;
        if (e.target.dataset.id === "PREVIOUS") {
            selectedPageNo = activePage - 1;
        } else if (e.target.dataset.id === "NEXT") {
            selectedPageNo = activePage + 1;
        } else {
            selectedPageNo = Number(e.target.dataset.id);
        }
        setActivePage(selectedPageNo);
        onPageChange(selectedPageNo);
    }, [activePage]);

    useEffect(() => {
        const newPages = getPages(totalPages, maxVisiblePageCount, activePage);
        setPages(newPages);
    }, [activePage]);

    return (
        <div className="pagination">
            <button className="page-button"  disabled={activePage === 1 } data-id={"PREVIOUS"} onClick={changePage}>Prev</button>
            {
                pages.map((page) => (
                    <button className={`page-button ${activePage == page ? 'active' : ''}`} data-id={page} onClick={changePage}>{page}</button>
                ))
            }
            <button className="page-button" disabled={activePage === totalPages } data-id={"NEXT"} onClick={changePage}>Next</button>
        </div>
    )
}

export default Pagination;