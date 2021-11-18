import React, {useContext} from 'react';
import ButtonStyle from './Button.style';
import  ThemeContext  from '../../theme-context';

const Button = ({label, onClick}) => {
    const theme = useContext(ThemeContext);

    return (
        <ButtonStyle theme={theme}>
            <button onClick={onClick}>
                {label}
            </button>
        </ButtonStyle>

    )
}

export default Button;