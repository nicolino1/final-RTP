import React, {useState, useEffect, useContext} from 'react';
import HomeStyle from './Home.style';
import Form from '../../components/form/Form';
import Card from '../../components/card/Card';
import Modal from '../../components/modal/Modal';
import  ThemeContext  from '../../theme-context';
import  { connect } from 'react-redux';
import {createPost} from '../../store/actions/postActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { signOut } from '../../store/actions/authActions';
import Loader from '../../components/loader/Loader'

import { useNavigate } from "react-router-dom";
import { deletePost } from '../../store/actions/postActions';

const Home = ({post, createPost, auth, signOut, users, deletePost}) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [current, setCurrent] = useState();
    const [actualUserID, serActualUserID] = useState();
    const [ isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(auth.uid === "hxhrVvS1VWOiFypLJ2V5W0jcyxC2");
    const theme = useContext(ThemeContext);

    let navigate = useNavigate();

    useEffect (() => {
        setAdmin(auth.uid === "hxhrVvS1VWOiFypLJ2V5W0jcyxC2")
    }, [auth.uid])

    useEffect (() => {    
        post?.length && setIsLoading(false)

        setTitle("");
        setContent("");
    }, [post])

    const showModal = (id = "", userID = "") => {
        setCurrent(id);
        serActualUserID(userID);
        setShow(!show)
    }

    const onChange = (e) => {
        e.target.name === "write a title" ?
            setTitle(e.target.value)
            :
            setContent(e.target.value)

        console.log(e.target.name)
    } 

    const onClick = () => {
        signOut();
        navigate("/");
    }

    const submitLogin = (e) => {
        e.preventDefault();
        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();

        let actualUser = users.find((user) =>  user.userID === auth.uid);
        
        createPost(
            {
                title, 
                content, 
                authorId: auth.uid,
                author: actualUser.name, 
                date: {day: day, mounth: month, year: year}, 
                image: actualUser.image
            })
        

        

    
    }

    const deleteItemHandler = ( postKey) => {
        // const items = [...post];
        // items.splice(index, 1);
        console.log("delete")
        deletePost(postKey);
        // setStudents(items);
    }

    return (
        <>
        <HomeStyle theme = {theme}>
            <div>
            {auth.uid ? 
            <>
            <button onClick={onClick}>Log out</button>
            <h1>Share your experiences with us</h1>
            
            <Form  
                label="Post" 
                onClick={submitLogin} 
                fields= {[
                    {placeholder: 'write a title', onChange: onChange, type: 'text', value: title  }, 
                    {placeholder: 'what are you thinking?', onChange: onChange, type: 'textarea', value: content }
                ]}
                />
            </>
            :
            <h1>To share your opinion with others, please sign into the App</h1>
            }
            </div>
            <div>
                {isLoading ? 
                    <Loader /> 
                    :
                    <>
                        <h2>All post</h2>
                        {post && post.map((element) => <Card isAdmin={admin} image={element.image} id={element.id} title={element.title} content={element.content} onClick={() =>showModal(element.id, element.authorId)} deleteCard={deleteItemHandler} />)}
                    </>
                }
                
            </div>
        </HomeStyle>
        <Modal userID={actualUserID} id={current} post={post} handleClose= {showModal} show={show}>
            <h1>Details</h1>
        </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        post: state.firestore.ordered.post,
        users: state.firestore.ordered.users,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       createPost: (post) => {dispatch(createPost(post))},
       signOut: () => {dispatch(signOut())},
       deletePost: (postkey) => dispatch(deletePost(postkey))
    }
  }

export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    firestoreConnect([{collection: 'post'}, {collection: 'users'}])
    )(Home);