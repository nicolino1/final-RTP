import { useContext } from "react";
import LoaderStyle from "./Loader.style";
import  ThemeContext  from '../../theme-context';

const Loader = () =>{
    const theme = useContext(ThemeContext);

    return (<LoaderStyle theme = {theme}></LoaderStyle>)
} 

export default Loader;