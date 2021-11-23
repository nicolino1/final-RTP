import  styled from 'styled-components';

const ButtonStyle = styled.div`
    & button {
        border: 1px solid ${props => props.theme.color};
        border-radius: 5px;
        padding: 20px;
        margin: 20px;
        color:  ${props => props.theme.color};
        font-size: 1.2rem;
        font-weight: bold;
        background: transparent;
        box-shadow: inset 0 0 0 0  ${props => props.theme.color};
        width: 50%;
        transition: ease-out 0.3s;
        text-decoration: none;

         @media (max-width: 800px) {
            font-size: 0.7rem;
            padding: 10px;
            
         }
        
        &:hover {
            color: white;
            box-shadow: inset 300px 0 0  0  ${props => props.theme.color};

            @media (min-width: 1300px) {
                box-shadow: inset 600px 0 0  0  ${props => props.theme.color};
                
            }
        }
    }
`;

export default ButtonStyle;