import React, {useContext, useState, useEffect} from 'react';
import Form from '../../components/form/Form';
import LoginStyle from './Login.style';
import Button from '../../components/button/Button';
import { useNavigate } from "react-router-dom";
import  ThemeContext  from '../../theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const Login = ({changeTheme, signIn, authError, auth}) => {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    let navigate = useNavigate();
    const theme = useContext(ThemeContext);
    
    useEffect(() => {
        authError && setError(true)
    }, [authError])

    const onChange = (e) => {
        e.target.name === "user" ?
            setUser(e.target.value)
            :
            setPassword(e.target.value)
    } 

    const submitLogin = (e) => {
        e.preventDefault();
        signIn({user, password});

        user && password && auth?.uid  && navigate('/home');
    }

    return (
        <LoginStyle theme= {theme} >
            <div>
                <h1>Welcome to BlogSide</h1>
                <p>the 1st platform on the world that doesn't steal your information</p>
            </div>
            <div>
                <Form  
                    label="Log in" 
                    onClick={submitLogin} 
                    fields= {[{placeholder: 'user', onChange: onChange, type: 'text' }, {placeholder: 'password', onChange: onChange, type: 'password' }]}
                    />
                <Button label = 'Guest entry' onClick={() => navigate("/home")} />
                {error && <p>{authError}</p>}
            </div>
            <div>
                <button onClick={changeTheme}>
                { localStorage.getItem('theme') === 'light' ?
                    <FontAwesomeIcon icon={faMoon} />
                    :
                    <FontAwesomeIcon icon={faSun} />
                }
                </button>
            </div>
            
        </LoginStyle>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);