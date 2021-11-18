import  styled from 'styled-components';

const ButtonStyle = styled.div`
    & button {
        border: 1px solid ${props => props.theme.color};
        border-radius: 5px;
        padding: 20px;
        margin: 20px;
        color:  ${props => props.theme.color};
        font-size: 20px;
        font-weight: bold;
        background: transparent;
        box-shadow: inset 0 0 0 0  ${props => props.theme.color};
        width: 50%;
        transition: ease-out 0.3s;
        text-decoration: none;
        
        &:hover {
            color: white;
            box-shadow: inset 300px 0 0  0  ${props => props.theme.color};
        }
    }
`;

export default ButtonStyle;