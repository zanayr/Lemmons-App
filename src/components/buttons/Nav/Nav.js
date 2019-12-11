import React from 'react';

import styles from './Nav.module.css';

const nav = (props) => {
    const style = [styles.Nav];
    if (props.disabled)
        style.push(styles.Disabled);
    return (
        <div className={style.join(' ')} onClick={props.disabled ? props.click : () => {}}>
            <div className={styles.Wrapper}>
                <p>{props.value}</p>
            </div>
        </div>
    );
};

export default nav;