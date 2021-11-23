import React from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import FormStyle from './Form.style';

const Form = ({label, onClick, onSubmit, fields}) => {

    return (
        <FormStyle>
            <form >
                {fields.map((field) => <Input key={field.placeholder} placeholder= {field.placeholder} onChange= {field.onChange} type={field.type} value={field.value} />)}
                <Button label={label} onClick={onClick}/>
            </form>
        </FormStyle>
    )
}

export default Form;