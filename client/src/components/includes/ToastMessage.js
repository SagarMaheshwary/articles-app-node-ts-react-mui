import React, { useContext } from 'react';
import { GlobalContext } from '../../store';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { hideToastMessage } from '../../actions';

function ToastMessage() {
	const [globalState, dispatch] = useContext(GlobalContext);
	const { message } = globalState;

	const handleClose = () => hideToastMessage(dispatch);

	const toastMsg = (
		<Snackbar
			open={message.msg ? true : false}
			autoHideDuration={3000}
			onClose={handleClose}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
		>
			<Alert severity={message.type}>{message.msg}</Alert>
		</Snackbar>
	);

	return message.show ? toastMsg : null;
}

export default ToastMessage;
