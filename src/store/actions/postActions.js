export const createPost = (post) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const firestore = getFirestore();
        firestore.collection('post').add({
           ...post,
           author: post.author,
           authorId: post.authorId,
           title: post.title,
           content: post.content,
           date: post.date,
           image: post.image
        }).then(() => {
            dispatch({
                type: 'CREATE_POST',
                post: post
            });
        }).catch((err) => {  
            dispatch({
            type: 'CREATE_POST_ERROR',
            err
            });
        });


    }

    
}

export const deletePost = (postKey) => {
    console.log(postKey)
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to databasse
        const firestore = getFirestore();
        //const firebase = getFirebase();
        firestore.collection("post").doc(postKey).delete().then(
        () => {dispatch({type: 'DELETE_POST', postKey: postKey}); 
        }).catch((err) => { dispatch({type: 'DELETE_POST_ERROR', err})})
        

    }
};