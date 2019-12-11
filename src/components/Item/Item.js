import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Context from '../buttons/Context/Context';

import styles from './Item.module.css';

const Item = (props) => {
    const [active, setActive] = useState(false);

    const style = [styles.Item];
    if (active)
        style.push(styles.Active);
    if (props.data.urgent)
        style.push(styles.Urgent);
    if (props.data.complete)
        style.push(styles.Complete);
    
    //  Event handlers  //
    const handleClick = (e) => {
        setActive(prev => (!prev));
    };
    const handleOnDelete = (e) => {
        props.onDelete({id: props.data.id});
    };
    const handleOnEdit = (e) => {
        setActive(prev => (!prev));
        props.onEdit(props.data);
        props.history.push('/inspect');
    };

    return (
        <div
            onClick={handleClick}
            className={style.join(' ')}>
            <div className={styles.Wrapper}>
                <h3>{props.data.title}</h3>
                <p>{props.data.detail}</p>
                <Context
                    value='b'
                    position={0}
                    active={active}
                    click={handleOnEdit} />
                <Context
                    value='d'
                    position={1}
                    active={active}
                    click={handleOnDelete} />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onComplete: (data) => dispatch(actions.update_async(data)),
        onDelete: (data) => dispatch(actions.delete_async(data)),
        onEdit: (data) => dispatch(actions.select(data))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Item));