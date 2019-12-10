import React, { useState } from 'react';

import Context from '../buttons/Context/Context';

import styles from './Item.module.css';

const Item = (props) => {
    const [active, setActive] = useState(false);

    const style = [styles.Item];
    if (active)
        style.push(styles.Active);
    
    return (
        <div
            onClick={() => setActive(prev => (!prev))}
            className={style.join(' ')}>
            <div className={styles.Wrapper}>
                <h3>{props.title}</h3>
                <p>{props.detail}</p>
                <Context value='edit' position={0} active={active} />
                <Context value='complete' position={1} active={active} />
            </div>
        </div>
    );
};

export default Item;