import React, {createContext} from 'react';

export const themes = {
    light: {
        color: 'skyblue',
        backgroundImage: 'linear-gradient(to left bottom, rgba(0, 100, 200, 0.7), rgba(0, 50, 150, 0.7))',
        urlLogin: 'https://th.bing.com/th/id/OIP.6MaKNcaRbwlCzhzRY9D4KwHaHa?pid=ImgDet&w=1200&h=1200&rs=1',
        urlHome: 'https://wallpaperaccess.com/full/2901565.jpg',
        shadowColor: 'rgba(0, 0, 255, .2)',
        backgroundColor: 'white',
        cardfirstbutton: 'coral',
        cardsecondbutton: 'skyblue',
        cardBackground: 'rgba(250,250, 255, 1 )'
    },
    dark: {
        color: 'coral',
        backgroundImage: 'linear-gradient(to left bottom, rgba(200, 100, 0, 0.7), rgba(150, 50, 0, 0.7))',
        urlLogin: 'https://cdn.pixabay.com/photo/2018/08/21/23/39/night-3622557_1280.jpg',
        urlHome: 'https://pm1.narvii.com/7771/3da5d36635052d3283870d671f6bdabb7400108er1-736-1472v2_hq.jpg',
        shadowColor: 'rgba(200, 0, 50, .5)',
        backgroundColor: 'rgba(50, 50, 50, 1)',
        cardfirstbutton: 'darkred',
        cardsecondbutton: 'purple',
        cardBackground: 'rgba(45,40, 40, 1 )'
    }
}

const ThemeContext = createContext(themes.light);

export default ThemeContext;