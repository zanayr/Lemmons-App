import React from 'react';

import styles from './Action.module.css';

const action = (props) => {
    return (
        <div
            onClick={props.click}
            className={styles.Action}>
            <div className={styles.Wrapper}>
                <h3>+</h3>
            </div>
        </div>
    );
};

export default action;