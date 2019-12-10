import React, { Component } from 'react';

import Action from '../../components/buttons/Action/Action';
import List from '../../components/List/List';
import Title from '../../components/Title/Title';

class Main extends Component {
    state = {
        value: ''
    };

    render() {
        return (
            <main>
                <div>
                    <Title />
                    <List />
                    <Action />
                </div>
            </main>
        );
    }
}

export default Main;