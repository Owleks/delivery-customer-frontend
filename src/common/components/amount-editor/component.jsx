import React, {memo} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Input} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';

const AmountEditor = memo((props) => {
    let amount = props.amount;
    const onActionClick = (action) => () => {
        const newAmount = action === 'add' ? ++amount : --amount;
        props.onAmountChanged(newAmount, props.id);
    };
    return (
        <>
            <Fab onClick={onActionClick('add')} size="small" color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Input defaultValue="1" onChange value={amount} disabled style={{width: 20, textAlign: 'center'}} />
            <Fab onClick={onActionClick('remove')} size="small" color="secondary" aria-label="remove">
                <RemoveIcon />
            </Fab>
        </>
    );
});

export default AmountEditor;