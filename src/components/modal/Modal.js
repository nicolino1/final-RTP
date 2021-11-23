import React, {useContext} from 'react';
import ModalStyle from './Modal.style';
import Button from '../button/Button';
import { useNavigate } from "react-router-dom";
import  ThemeContext  from '../../theme-context';

const Modal = ({ handleClose, show, children, id, post, userID }) => {
    let navigate = useNavigate();
    const theme = useContext(ThemeContext);

    const selectedDetails = post && post.find((element) => element.id === id);
    return (
        <ModalStyle show={show} theme={theme}>
            <section>
                {children}
                <p>{selectedDetails && selectedDetails.author}</p>
                <p>{selectedDetails && 
                    selectedDetails.date.day + "-" + 
                    selectedDetails.date.mounth + "-" +
                    selectedDetails.date.year
                    }</p>
                {(userID !== "hxhrVvS1VWOiFypLJ2V5W0jcyxC2") && <Button label="Go to About" onClick={() => navigate(`/about/${userID}`)}/>}
                <Button label="Close" onClick={handleClose} />
            </section>
        </ModalStyle>
    )
};

export default Modal;