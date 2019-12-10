import React from 'react';

import Item from '../Item/Item';

import styles from './List.module.css';

const list = (props) => {
    const items = Object.keys(props.data).map(key => {
        return <Item
            id={key}
            title={props.data[key].title}
            detail={props.data[key].detail}
            key={key} />
    });
    return (
        <div className={styles.List}>
            <div className={styles.Wrapper}>
                {items}
            </div>
        </div>
    );
};

export default list;