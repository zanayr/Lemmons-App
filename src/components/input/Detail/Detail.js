import React from 'react';

import styles from './Detail.module.css';

const Detail = (props) => {
    return (
        <div className={styles.Detail}>
            <div className={styles.Wrapper}>
                <label>Detail</label>
                <textarea
                    onChange={props.change}
                    value={props.value}></textarea>
            </div>
        </div>
    );
};

export default Detail;