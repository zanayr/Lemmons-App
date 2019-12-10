import React from 'react';

import styles from './Title.module.css';

const title = (props) => {
    return (
        <div className={styles.Title}>
            <div className={styles.Wrapper}>
                <h1>{props.value}</h1>
            </div>
        </div>
    );
};

export default title;