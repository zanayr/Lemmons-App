import React from 'react';

import Nav from '../buttons/Nav/Nav';
import DisabledNav from '../buttons/Nav/DisabledNav';

import styles from './Navigation.module.css';

const navigation = (props) => {
    let save = (<Nav click={props.confirm} value={props.values[1]} />);
    if (!props.touched)
        save = (<DisabledNav value={props.values[1]} />);
    return (
        <nav className={styles.Navigation}>
            <div className={styles.Wrapper}>
                <Nav click={props.cancel} value={props.values[0]} />
                {save}
            </div>
        </nav>
    );
};

export default navigation;