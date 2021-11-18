import React, {useContext} from 'react';
import ModalStyle from './Modal.style';
import Button from '../button/Button';
import { useNavigate } from "react-router-dom";
import  ThemeContext  from '../../theme-context';

const Modal = ({ handleClose, show, children }) => {
    let navigate = useNavigate();
    const theme = useContext(ThemeContext);

    return (
        <ModalStyle show={show} theme={theme}>
            <section>
                {children}
                <Button label="Go to About" onClick={() => navigate("/about")}/>
                <Button label="Close" onClick={handleClose} />
            </section>
        </ModalStyle>
    )
};

export default Modal;