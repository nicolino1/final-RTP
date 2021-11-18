import  styled from 'styled-components';

const LoginStyle = styled.div`
    display: flex;
    height: 100vh;
    text-align: center;
    background: ${props => props.theme.backgroundColor};

    & > div {
        flex-basis: 50%;
        display: flex;

        justify-content: center;
        align-items: center;
    }

    & > div:first-child {
        background-image: ${props => props.theme.backgroundImage} ,url(${props => props.theme.urlLogin});
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        color: ${props => props.theme.color};
        font-weight: bold;

        & > h1 {
            font-size: 4rem;
        }

        & > p {
            font-size: 1rem;
            width: 60%;
        }
    

    }

    & > div:nth-child(2) {
        flex-direction: column;
    }

    & > div:last-child {
        position: absolute;
        top: 2%;
        left: 48%;

        & > button {
            border: none;
            padding: 20px;
            background: rgba(200,200,200, 0.8);
            border-radius: 50%;
        }
    }

    @media (max-width: 800px) {
        flex-direction: column-reverse;

        & > div:last-child {
            flex-direction: column-reverse;

        }
        
    }
`;

export default LoginStyle;

