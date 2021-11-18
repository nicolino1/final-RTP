import React, {useState, useContext} from 'react';
import HomeStyle from './Home.style';
import Form from '../../components/form/Form';
import Card from '../../components/card/Card';
import Modal from '../../components/modal/Modal';
import  ThemeContext  from '../../theme-context';

const Home = () => {
    const [show, setShow] = useState(false);
    const theme = useContext(ThemeContext);

    const showModal = () => {
        setShow(!show)
    }

    return (
        <>
        <HomeStyle theme = {theme}>
            <div>
            <h1>Share your experiences with us</h1>
            <Form  
                label="Post" 
                onClick={() => {}} 
                onSumbit={() => {}} 
                fields= {[
                    {placeholder: 'write a title', onChange: () => {}, type: 'text'  }, 
                    {placeholder: 'what are you thinking?', onChange: () => {}, type: 'textarea'}
                ]}
                />
            </div>
            <div>
                <h2>All post</h2>
                <Card onClick={showModal} />
                <Card onClick={showModal} />
                <Card onClick={showModal} />
                <Card onClick={showModal} />
            </div>
        </HomeStyle>
        <Modal handleClose= {showModal} show={show}>
            <h1>Hola</h1>
        </Modal>
        </>
    )
}

export default Home;