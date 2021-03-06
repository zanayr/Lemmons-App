import React from 'react';

import styles from './Title.module.css';

const Title = (props) => {
    return (
        <div className={styles.Title}>
            <div className={styles.Wrapper}>
                <label>Title</label>
                <input
                    onChange={props.change}
                    value={props.value}
                    placeholder={props.placeholder}
                    maxLength={24}/>
                    <span></span>
            </div>
        </div>
    );
};

export default Title;