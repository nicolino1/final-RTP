import React, {useContext} from 'react';
import CardStyle from './Card.style';
import loginImage from '../../assets/loginImage.jpg';
import  ThemeContext  from '../../theme-context';

const Card = ({id , isAdmin, title= "hola", content= "hola", image= loginImage, onClick, deleteCard}) => {
    const theme = useContext(ThemeContext);

    return (
        <CardStyle theme = {theme} id={id} key={id}>
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
                {isAdmin && <button onClick={() => deleteCard(id)}>delete</button>}
                <button onClick={onClick}>details</button>
            </div>
        </CardStyle>
    )
}

export default Card;