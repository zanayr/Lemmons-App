import React from 'react';

import styles from './Nav.module.css';

const disabledNav = (props) => {
    return (
        <div className={[styles.Nav, styles.Disabled].join(' ')}>
            <div className={styles.Wrapper}>
                <p>{props.value}</p>
            </div>
        </div>
    );
};

export default disabledNav;