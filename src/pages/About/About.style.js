import  styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
    background-image: ${props => props.theme.backgroundImage} ,url(${props => props.theme.urlHome});
    background-size: cover;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.theme.color};
    font-weight: bold;

& > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(200, 200, 200, 0.7);
    margin: 2rem;
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 10px;

    & > h1, p {
        animation: translate .5s linear;
  
        @keyframes translate {
            0% { transform: translateX(-500px); }
            50% { transform: translateX(100px); }
            100% { transform: translateX(0px); }
        }
    }

    & > h2 {
        animation: translate2 .5s linear;
  
        @keyframes translate2 {
            0% { transform: translateX(500px); }
            50% { transform: translateX(-100px); }
            100% { transform: translateX(0px); }
        }
    }

    &  img {
        border-radius: 50%;
        width: 300px;
        height: 300px;
        animation: grow .3s linear;
        transition: all .3s ease-out;
  
        @keyframes grow {
            0% { transform: scale(1.05); }
            100% { transform: rotate(1); }
        }

        &:hover {
            transform: scale(1.02);
        }

    }
    
}

`;

export default AboutStyle;

