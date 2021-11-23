import React, {useState, useEffect} from 'react';
import AboutStyle from './About.style';
import { useContext } from 'react';
import ThemeContext from '../../theme-context';
import { useParams } from 'react-router';
import  { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Loader from '../../components/loader/Loader';

const About = ({users}) => {
    const theme = useContext(ThemeContext);
    const { id } = useParams();
    const [actualUser, setActualUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setActualUser(users?.find((user) => id === user.userID))
    }, [users]);

    useEffect(() => {
        actualUser?.userID && setIsLoading(false);
    }, [actualUser]);
    
    return (
        <AboutStyle theme={theme}>
            
                <div>
                {isLoading ? 
                <Loader />
                :
                <>
                    <h1>About</h1>
                    <h2>{actualUser?.name}</h2>
                    <p>{actualUser?.contentType}</p>
                    <img src={actualUser?.image} alt="profile"/>
                </>
                }
                </div>
            

        </AboutStyle>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.firestore.ordered.users,
    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([{collection: 'users'}])
    )(About);