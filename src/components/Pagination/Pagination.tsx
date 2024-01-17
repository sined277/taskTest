import React, { useState } from 'react'
import styles from './Pagination.module.scss'

type PaginationProps = {
    elementPerPage: number,
    totalElements: number,
    paginate: (number: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ elementPerPage, totalElements, paginate }) => {
    const pageNumbers = Array.from({ length: Math.ceil(totalElements / elementPerPage)}, (_, index) => index + 1);
    const [activeBtn, setActiveBtn] = useState(0)

    const handlerButtonClick = (number: number, i: number) => {
        paginate(number)
        setActiveBtn(i)
    }

    return (
        <ul className={styles.pagination}>
            {pageNumbers.map((number, i) => (
                <li onClick={() => handlerButtonClick(number, i)} className={`${styles.number} ${activeBtn === i && styles.activeBtn}`} key={number}>{number}</li>
            ))}
        </ul>
    )
}

export default Pagination;
