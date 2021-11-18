import React from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import FormStyle from './Form.style';

const Form = ({label, onClick, onSubmit, fields = [{placeholder: 'test', onChange: () => {} }]}) => {

    return (
        <FormStyle>
            <form onSumbit={onSubmit}>
                {fields.map((field) => <Input placeholder= {field.placeholder} onChange= {field.onChange} type={field.type} />)}
                <Button label={label} onClick = {onClick} />
            </form>
        </FormStyle>
    )
}

export default Form;