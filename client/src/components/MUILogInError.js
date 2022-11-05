import { useContext } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Modal from '@mui/material/Modal';
import AuthContext from '../auth'
import badLogin from '../auth/index'
import Box from '@mui/material/Box';
import { Button } from 'react-bootstrap'

export default function MUILogInError() {
    const { auth } = useContext(AuthContext);

    function handleClose(event) {
        auth.resetBadLogin()
    }

    let message = auth.errMsg
    // if(auth.badLogin){
    //     vis = true
    // }
    // <input 
    // type="button"
    // className="modal-button" 
    // value='Cancel' 
    // onClick={handleClose} />
    //console.log(auth.badLogin)

    return (
        <Modal
            open={auth.badLogin == true}
        >

            <Alert onClose={() => handleClose()} severity="error">

                <strong>LOG IN ERROR:</strong> {message}

            </Alert>

        </Modal>
    );
}