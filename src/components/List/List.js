import React from 'react';

import Item from '../Item/Item';

import styles from './List.module.css';

const list = (props) => {
    const items = props.data.map(item => {
        console.log(item);
        return <Item
            data={item}
            key={item.id} />
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