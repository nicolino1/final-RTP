import  styled from 'styled-components';

const InputStyle = styled.div`
    & input, textarea {
        margin: 10px;
        border-width: 0px;
        border-bottom-width: 2px;
        border-bottom-color: ${props => props.theme.color};
        background: transparent;
        width: 80%;
        height: 5%;
        outline: none;
        color: ${props => props.theme.color};
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        ${props => props.type === "textarea" && 'padding-bottom: 100px;'}
        resize: none;

        &:focus {
            border-bottom: 2px solid rgba(200, 200, 200, 1);

            &::placeholder {
                transition: transform 0.5s;
                transform: translate(-110%, 0%);

            }
        }

        &::selection {
            background: ${props => props.theme.color};
            color: ${props => props.theme.color};
            text-shadow: 1px 1px #fff;
        }


        &::placeholder {
            transition: ease-out 0.3s;
            color: ${props => props.theme.color};
            text-transform: capitalize;

        }

        
    }
`;

export default InputStyle;

