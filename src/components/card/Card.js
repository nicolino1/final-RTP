import React, {useContext} from 'react';
import CardStyle from './Card.style';
import loginImage from '../../assets/loginImage.jpg';
import  ThemeContext  from '../../theme-context';

const Card = ({title= "hola", content= "hola", image= loginImage, onClick}) => {
    const theme = useContext(ThemeContext);

    return (
        <CardStyle theme = {theme}>
            <div>
                <img src={image} />
            </div>
            <div>
                <h1>
                    {title}
                </h1>
                <p>
                    {content}
                </p>
            </div>
            <div>
                <button>delete</button>
                <button onClick={onClick}>details</button>
            </div>
        </CardStyle>
    )
}

export default Card;