import React, {memo, useContext} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {AppContext} from '../../../appContext';

const AmountEditor = memo(({id}) => {
    const context = useContext(AppContext);
    let amount = (context.orders && context.orders[id]) || 0;
    const isRemoveActionDisabled = !amount;
    const onActionClick = (action) => () => {
        const newAmount = action === 'add' ? ++amount : --amount;
        const order = {};
        let orders;
        if (newAmount <= 0) {
            delete context.orders[id];
            orders = context.orders;
        } else {
            order[id] = newAmount;
            orders = {
                ...context.orders,
                ...order
            };
        }
        context.setOrders({...orders});
        localStorage.setItem('orders', JSON.stringify(orders));
    };
    return (
        <>
            <Fab disabled={isRemoveActionDisabled} onClick={onActionClick('remove')} size="small" color="secondary"
                 aria-label="remove">
                <RemoveIcon />
            </Fab>
            <span style={{"margin": "10px"}}>{amount}</span>
            {/*<Input value={amount} disabled style={{width: 20, textAlign: 'center'}} />*/}
            <Fab onClick={onActionClick('add')} size="small" color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </>
    );
});

export default AmountEditor;
