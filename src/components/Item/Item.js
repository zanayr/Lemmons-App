import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Context from '../buttons/Context/Context';

import styles from './Item.module.css';

const Item = (props) => {
    const [active, setActive] = useState(false);

    const style = [styles.Item];
    if (active)
        style.push(styles.Active);
    
    const handleClick = (e) => {
        setActive(prev => (!prev));
        props.history.push('/inspect/' + props.id);
    };

    return (
        <div
            onClick={handleClick}
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

export default withRouter(Item);