import React from 'react'
import './paginator.css'

export const Paginator = ({ totalCount, pageSize, currentPage, onPageChanged, ...props }) => {
    let pagesCount = Math.ceil(totalCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className='paginator'>
        {pages.map(p => {
            return <p
                key={p}
                className={currentPage === p && 'paginator--selected_page'}
                onClick={() => { onPageChanged(p) }}>
                {p}
            </p>
        })}
    </div>
}
