import React from 'react';

import styles from './Context.module.css';

const Context = (props) => {
    const style = [styles.Context, props.position ? styles.Complete : styles.Edit];
    if (props.active)
        style.push(styles.Active);
    return (
        <div className={style.join(' ')}>
            <div className={styles.Wrapper}>
                {props.value}
            </div>
        </div>
    );
};

export default Context;