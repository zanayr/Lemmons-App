import React from 'react';

import styles from './Item.module.css';

const item = (props) => {
    return (
        <div className={styles.Item}>
            <div className={styles.Wrapper}>
                <h3>{props.title}</h3>
                <p>{props.detail}</p>
            </div>
        </div>
    );
};

export default item;