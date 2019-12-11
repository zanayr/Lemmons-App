import React, { Component } from 'react';
import axios from '../../axios-items';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/input/Title/Title';
import Detail from '../../components/input/Detail/Detail';

import styles from './Inspect.module.css';

class Inspector extends Component {
    state = {
        touched: false,
        title: '',
        detail: ''
    }

    componentDidMount() {
        let item;
        this.props.items.map(i => {
            if (i.id === this.props.match.params.id)
                item = i;
        });
        this.setState({
            ...this.state,
            title: item.title,
            detail: item.detail
        });
    }

    handleCancel = (e) => {
        console.log('cancel clicked');
        this.props.history.goBack();
    }
    handleChange = (e, property) => {
        this.setState({
            ...this.state,
            [property]: e.target.value
        }, () => {
            if (!this.state.touched)
                this.setState({
                    ...this.state,
                    touched: true
                });
        });
    }
    handleConfirm = (e) => {
        const item = {
            id: 0,
            data: {
                title: this.state.title,
                detail: this.state.detail
            }
        };
        if (this.props.match.params.id) {
            this.props.onUpdate(item);
        } else {
            this.props.onAdd(item);
        }
    }

    render() {
        return (
            <main>
                <div>
                    <Navigation
                        actions={{
                            cancel: this.handleCancel,
                            confirm: this.handleConfirm
                        }}
                        touched={this.state.touched}
                        values={['cancel', this.props.match.params.id ? 'save' : 'add']}/>
                    <form>
                        <div className={styles.Wrapper}>
                            <Title
                                change={(e) => this.handleChange(e, 'title')}
                                value={this.state.title} />
                            <Detail
                                change={(e) => this.handleChange(e, 'detail')}
                                value={this.state.detail} />
                        </div>
                    </form>
                    {/* <Bar value='delete' click={this.handleDelete} /> */}
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAdd: (data) => dispatch({type: actions.ADD_ITEM, payload: data}),
        onUpdate: (data) => dispatch({type: actions.UPDATE_ITEM, payload: data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspector);