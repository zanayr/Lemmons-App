import React, { Component } from 'react';
import axios from '../../axios-items';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Action from '../../components/buttons/Action/Action';
import List from '../../components/List/List';
import Title from '../../components/Title/Title';

import styles from './Main.module.css';

class Main extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        this.props.onLoad();
    }

    handleAction = (e) => {
        const item = {
            title: 'Added Item',
            detail: 'This is an added item, hooray!'
        }
        // axios.post('/items.json', item)
        //     .then(res => console.log(res))
        //     .catch(err => console.error);
        this.props.onAddItem({id: 0, data: item});
    };

    render() {
        console.log(this.props.items);
        return (
            <main className={styles.Main}>
                <div className={styles.Wrapper}>
                    <Title value='Lemmons App' />
                    <List data={this.props.items}/>
                    <Action click={this.handleAction} value='+'/>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAddItem: data => dispatch(actions.add(data)),
        onDeleteItem: data => dispatch(actions.del(data)),
        onLoad: () => dispatch(actions.getAll())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);