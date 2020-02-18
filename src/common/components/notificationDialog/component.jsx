import React, {memo, useContext} from 'react';
import {
  Modal,
} from '@material-ui/core';

import {AppContext} from '../../../appContext';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const NotificationDialog = memo((props) => {
  const classes = useStyles();
  const context = useContext(AppContext);
  const { text, header } = context.notificationDialogText;
  const handleClose = () => {
    context.setIsNotificationDialogOpened(false);
    context.setNotificationDialogText({
      header: '',
      text: ''
    });
  };
  return (
    <>
      <Modal
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={context.isNotificationDialogOpened}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">{header}</h2>
          <p id="simple-modal-description">
            {text}
          </p>
        </div>
      </Modal>
    </>
  )
});


export default NotificationDialog;
