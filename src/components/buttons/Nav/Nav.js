import React from 'react';

import styles from './Nav.module.css';

const nav = (props) => {
    return (
        <div className={styles.Nav} onClick={props.click}>
            <div className={styles.Wrapper}>
                <p>{props.value}</p>
            </div>
        </div>
    );
};

export default nav;