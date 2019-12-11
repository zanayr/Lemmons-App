import React from 'react';

import styles from './Bar.module.css';

const bar = (props) => {
    return (
        <div className={styles.Bar} onClick={props.click}>
            <div className={styles.Wrapper}>
                {props.value}
            </div>
        </div>
    );
};

export default bar;