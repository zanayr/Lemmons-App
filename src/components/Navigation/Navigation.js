import React from 'react';

import Nav from '../buttons/Nav/Nav';

import styles from './Navigation.module.css';

const navigation = (props) => {
    return (
        <nav className={styles.Navigation}>
            <div className={styles.Wrapper}>
                <Nav click={props.actions.cancel} value={props.values[0]} />
                <Nav disabled={!props.touched} click={props.actions.confirm} value={props.values[1]} />
            </div>
        </nav>
    );
};

export default navigation;