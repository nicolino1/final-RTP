import  styled from 'styled-components';

const CardStyle = styled.div`
    display: flex;
    box-shadow: 5px 5px 2px 1px ${props => props.theme.shadowColor};
    width: 90%;
    transition: all 0.3s ease-out;
    border-radius: 5px;
    overflow: hidden;
    min-height: 200px;
    margin-top: 20px;
    background-color: ${props => props.theme.cardBackground};
    padding: 5px;
    box-sizing: border-box;

    @media (max-width: 800px) {
        flex-direction: column;
        
    }

    &:hover {
        box-shadow: 10px 10px 2px 1px ${props => props.theme.shadowColor};
        transform: translateY(-3px);
    }

    & > div:first-child {
        flex-basis: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        & > img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }

    & > div:nth-child(2) {
        padding: 10px;
        flex-basis: 60%;

        color: ${props => props.theme.color};
        font-weight: bold;

        & > h1 {
            font-size: 1.5rem;

            @media (max-width: 800px) {
                font-size: 1rem;
             }
        }

        & > p {
            font-size: 1rem;

            @media (max-width: 800px) {
                font-size: 0.7rem;
             }
        }
    }

    & > div:last-child {
        padding: 10px;
        flex-basis: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & button {
            border: none;
            background: ${props => props.theme.cardfirstbutton};
            color: white;
            padding: 10px;
            font-weight: bold;
            transition: all 0.3s ease-out;

            &:hover {
                border-radius: 15px;
                color: ${props => props.theme.cardfirstbutton};
                border: solid 1px ${props => props.theme.cardfirstbutton};
                background: transparent;
            }
        }

        & button:last-child {
            background: ${props => props.theme.cardsecondbutton};

            &:hover {
                border-radius: 15px;
                color: ${props => props.theme.cardsecondbutton};
                border: solid 1px ${props => props.theme.cardsecondbutton};
                background: transparent;
            }
        }

        
    @media (max-width: 800px) {
        flex-direction: row;
        
    }
    }
`;

export default CardStyle;

