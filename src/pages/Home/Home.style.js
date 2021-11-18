import  styled from 'styled-components';

const HomeStyle = styled.div`
position: relative;
display: flex;
min-height: 100vh;
text-align: center;
background-color: ${props => props.theme.backgroundColor};

& > div {
    flex-basis: 50%;
    display: flex;

    justify-content: center;
    align-items: center;
}

& > div:first-child {
    background-image: ${props => props.theme.backgroundImage} ,url(${props => props.theme.urlHome});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.color};
    font-weight: bold;

    & > h1 {
        font-size: 3rem;
        width: 80%;

        @media (max-width: 800px) {
            font-size: 1rem;
            
        }
    }

    @media (min-width: 800px) {
        position: fixed;
        width:50%;
        height: 100vh;
        
    }


}

& > div:last-child {
    flex-direction: column;
    color: ${props => props.theme.color};
    text-align: center;
    padding: 10px;

    @media (min-width: 800px) {
        margin-left: 50%;
        
    }

}

@media (max-width: 800px) {
    flex-direction: column;
    
    & > div:last-child {
        flex-direction: column;

    }
    
}

`;

export default HomeStyle;

