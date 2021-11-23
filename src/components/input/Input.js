import React, {useContext} from 'react';
import InputStyle from './Input.style';
import  ThemeContext  from '../../theme-context';

const Input = ({placeholder, onChange, type, value }) => {
    const theme = useContext(ThemeContext);
    console.log(value)
    return (
        <InputStyle type={type} theme={theme}>
            {
            type !=="textarea" ?
                <input 
                name={placeholder}
                onChange={onChange} 
                placeholder={placeholder}
                type={type}
                value={value}
                >

                </input> 
                
                :

                <textarea         
                name={placeholder}        
                onChange={onChange} 
                placeholder={placeholder}
                type={type}
                value={value}
                ></textarea>
            }

        </InputStyle>

    )
}

export default Input;