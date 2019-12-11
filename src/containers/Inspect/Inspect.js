import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import * as utility from '../../utility/utility';

import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/input/Title/Title';
import Detail from '../../components/input/Detail/Detail';
import Bar from '../../components/buttons/Bar/Bar';

import styles from './Inspect.module.css';

class Inspector extends Component {
    state = {
        touched: false,
        title: '',
        detail: ''
    }

    componentDidMount() {
        if (this.props.item) {
            this.setState({
                ...this.state,
                title: this.props.item.title,
                detail: this.props.item.detail
            });
        }
    }

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
            detail: this.state.detail,
            id: utility.genId(),
            title: this.state.title,
        };
        if (this.props.item) {
            this.props.onUpdate(item);
        } else {
            this.props.onAdd(item);
        }
        this.props.onClear();
        this.props.history.goBack();
    };
    handleDelete = (e) => {
        this.props.onDelete({id: this.props.match.params.id});
    };

    render() {
        return (
            <main>
                <div>
                    <Navigation
                        cancel={this.handleCancel}
                        confirm={this.handleConfirm}
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
                    <Bar value='delete' click={this.handleDelete} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Inspector);