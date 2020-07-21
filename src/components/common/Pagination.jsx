import React, { useState } from 'react';
import style from './pagination.module.css';

const Pagination = ({totalCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
        
    }
    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
            <ul className={style.list}>
               {portionNumber > 1 && <button onClick = {()=>setPortionNumber(portionNumber - 1)}>Prev</button>}
                {pages.filter((p)=> p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p,i) => {
                    return <li
                        onClick={() => {onPageChanged(p)}}
                        className={currentPage === p?`${style.selectedPage} ${style.pagination}`:` ${style.pagination}`} key={i}>{p}</li>
                })}
                {portionCount > portionNumber && <button onClick = {()=>setPortionNumber(portionNumber + 1)}>Next</button>}
            </ul>
    )
}

export default Pagination;


// if (p > 15) {
//     return false
// }