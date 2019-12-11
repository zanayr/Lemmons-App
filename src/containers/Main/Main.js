import React, { Component } from 'react';
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
        e.preventDefault();
        this.props.history.push('/inspect/');
    };

    render() {
        return (
            <main className={styles.Main}>
                <div className={styles.Wrapper}>
                    <div className={styles.Container}>
                        <div className={styles.Wrapper}>
                            <Title value='Lemmons App' />
                            <List data={this.props.items}/>
                            <Action click={this.handleAction} value='a'/>
                        </div>
                    </div>
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
        onLoad: () => dispatch(actions.getAll_async())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);