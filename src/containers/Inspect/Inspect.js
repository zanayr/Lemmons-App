import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import * as utility from '../../utility/utility';

import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/input/Title/Title';
import Detail from '../../components/input/Detail/Detail';
import Bar from '../../components/buttons/Bar/Bar';
import Toggle from '../../components/ui/Toggle/Toggle';

import styles from './Inspect.module.css';

class Inspect extends Component {
    state = {
        complete: 0,
        detail: '',
        loaded: false,
        title: '',
        urgent: 0
    }

    componentDidMount() {
        if (this.props.item) {
            console.log(this.state.urgent, this.props.item.urgent);
            this.setState(prev => ({
                ...prev,
                complete: this.props.item.complete,
                detail: this.props.item.detail,
                title: this.props.item.title,
                urgent: this.props.item.urgent
            }), () => {
                this.setState(prev => ({
                    ...prev,
                    loaded: true
                }));
            });
        }
    }

    //  Event Handlers  //
    handleCancel = (e) => {
        this.props.onClear();
        this.props.history.goBack();
    };
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
    };
    handleConfirm = (e) => {
        const item = {
            complete: this.state.complete,
            detail: this.state.detail,
            id: this.props.item ? this.props.item.id : utility.genId(),
            title: this.state.title,
            urgent: this.state.urgent
        }
        if (this.props.item) {
            this.props.onUpdate(item);
        } else {
            this.props.onAdd(item);
        }
        this.props.onClear();
        this.props.history.goBack();
    };
    handleToggle = (e, property) => {
        this.setState(prev => ({
            ...prev,
            [property]: 1 - prev[property]
        }));
    }

    render() {
        let urgent = null;
        let complete = null;
        if (this.state.loaded || !this.props.item) {
            urgent = (
                <Toggle
                    click={(e) => this.handleToggle(e, 'urgent')}
                    label='urgent'
                    value={this.state.urgent} />
            );
            complete = (
                <Toggle
                    click={(e) => this.handleToggle(e, 'complete')}
                    label='complete'
                    value={this.state.complete} />
            );
        }
        return (
            <main className={styles.Inspect}>
                <div className={styles.Wrapper}>
                    <Navigation
                        cancel={this.handleCancel}
                        confirm={this.handleConfirm}
                        enabled={this.state.title.length}
                        values={['cancel', this.props.item ? 'save' : 'add']}/>
                    <form className={styles.Form}>
                        <div className={styles.Wrapper}>
                            <Title
                                change={(e) => this.handleChange(e, 'title')}
                                value={this.state.title}
                                label='title'
                                placeholder='Lorem Ipsum' />
                            <Detail
                                change={(e) => this.handleChange(e, 'detail')}
                                value={this.state.detail}
                                label='detail'
                                placeholder='Lorem ipsum dolor set amet.' />
                            {urgent}
                            {complete}
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.single
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAdd: (data) => dispatch(actions.add_async(data)),
        onDelete: (data) => dispatch(actions.delete_async(data)),
        onUpdate: (data) => dispatch(actions.update_async(data)),
        onClear: () => dispatch(actions.select(null))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspect);