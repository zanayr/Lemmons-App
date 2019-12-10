import React, { Component } from 'react';
import axios from '../../axios-items';

import Action from '../../components/buttons/Action/Action';
import List from '../../components/List/List';
import Title from '../../components/Title/Title';

import styles from './Main.module.css';

class Main extends Component {
    state = {
        items: {
            0: {
                title: 'Laundry',
                detail: 'darks and don\'t forget to check your pockets!'
            },
            1: {
                title: 'Feed dog',
                detail: '2 scoops'
            },
            2: {
                title: 'Make grocery list',
                detail: 'butter, milk, eggs...'
            }
        }
    };

    handleAction = (e) => {
        const item = {
            title: 'Added Item',
            detail: 'This is an added item, hooray!'
        }
        axios.post('/items.json', item)
            .then(res => console.log(res))
            .catch(err => console.error);
    };

    render() {
        return (
            <main className={styles.Main}>
                <div className={styles.Wrapper}>
                    <Title value='Lemmons App' />
                    <List data={this.state.items}/>
                    <Action click={this.handleAction} value='+'/>
                </div>
            </main>
        );
    }
}

export default Main;