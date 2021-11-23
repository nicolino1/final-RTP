export const signIn = (credentials) => {
    return (distpatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.user,
            credentials.password
        ).then(() => {
            distpatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            distpatch({type: 'LOGIN_ERROR'})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}