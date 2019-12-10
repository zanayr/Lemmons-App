import React, { Component } from 'react';

import Action from '../../components/buttons/Action/Action';
import List from '../../components/List/List';
import Title from '../../components/Title/Title';

import styles from './Main.module.css';

class Main extends Component {
    state = {
        value: ''
    };

    render() {
        return (
            <main className={styles.Main}>
                <div className={styles.Wrapper}>
                    <Title value='Lemmons App' />
                    <List />
                    <Action />
                </div>
            </main>
        );
    }
}

export default Main;