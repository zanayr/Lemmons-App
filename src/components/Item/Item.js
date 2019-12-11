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
    
    const handleClick = (e) => {
        setActive(prev => (!prev));
        props.select(props.data);
        props.history.push('/inspect');
    };

    return (
        <div
            onClick={handleClick}
            className={style.join(' ')}>
            <div className={styles.Wrapper}>
                <h3>{props.data.title}</h3>
                <p>{props.data.detail}</p>
                <Context value='edit' position={0} active={active} />
                <Context value='complete' position={1} active={active} />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        select: (data) => dispatch(actions.select(data))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Item));