import React from 'react';

const Pagination = ({ totalPages, handleClick, page, setPage }) => {
    const pages = [...Array(totalPages).keys()].map(number => number + 1);

    return (
        <div className="pagination">

            {pages.map(number => (
                <button
                    key={number}
                    onClick={() => handleClick(number)}
                    className='pagination_itm'
                >
                    {number}
                </button>
            ))}

        </div>
    );
};

export default Pagination;
