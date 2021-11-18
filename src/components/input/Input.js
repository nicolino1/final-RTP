import React, {useContext} from 'react';
import InputStyle from './Input.style';
import  ThemeContext  from '../../theme-context';

const Input = ({placeholder, onChange, type}) => {
    const theme = useContext(ThemeContext);

    return (
        <InputStyle type={type} theme={theme}>
            {
            type !=="textarea" ?
                <input 
                name={placeholder}
                onChange={onChange} 
                placeholder={placeholder}
                type={type}
                >

                </input> 
                
                :

                <textarea         
                name={placeholder}        
                onChange={onChange} 
                placeholder={placeholder}
                type={type}
                ></textarea>
            }

        </InputStyle>

    )
}

export default Input;