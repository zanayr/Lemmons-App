import React, { useState } from 'react';

import styles from './Toggle.module.css';

const Toggle = (props) => {
    const [ active, setActive ] = useState(props.value);
    const outerStyle = [styles.Pit];
    const innerStyle = [styles.Knob];
    if (active) {
        outerStyle.push(styles.Active);
        innerStyle.push(styles.Active);
    }

    const handleOnClick = (e) => {
        setActive(!active);
        props.click();
    };

    return (
        <div className={styles.Toggle}>
            <div className={styles.Wrapper}>
                <label>{props.label}</label>
                <div className={outerStyle.join(' ')} onClick={handleOnClick}>
                    <div className={styles.Wrapper}>
                        <span className={innerStyle.join(' ')}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toggle;