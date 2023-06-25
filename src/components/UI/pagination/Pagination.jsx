import React from 'react';
import { getPageArray } from '../../../utils/pages';
import styles from './Pagination.module.css';

const Pagination = ({ totalPage, page, changePage }) => {
    const pageArray = getPageArray(totalPage);

    return (
        <div className='pagination'>
            {
                pageArray.map((p) => {
                    return (
                        <span
                            onClick={() => changePage(p)}
                            key={p}
                            className={(page === p)
                                ? `${styles.page} ${styles.page__current}`
                                : styles.page}>{p}
                        </span>
                    )
                })
            }
        </div>
    );
};

export default Pagination;