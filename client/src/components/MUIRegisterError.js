import { useContext } from 'react';
import Alert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import AuthContext from '../auth'

export default function MUIRegisterError() {
    const { auth } = useContext(AuthContext);

    function handleClose(event) {
        auth.resetBadLogin()
    }

    let message = auth.errMsg
    return (
        <Modal
            open={auth.badLogin == true}
        >

            <Alert onClose={() => handleClose()} severity="error">

                <strong>REGISTER ACCOUNT ERROR:</strong> {message}

            </Alert>

        </Modal>
    );
}