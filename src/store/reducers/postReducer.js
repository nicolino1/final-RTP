const initState = {
    post: [
        {id: '1', title: "i feel fine", content: "becuase i have work and sanity"},
        {id: '2', title: "i feel worry", content: "becuase i don't have work and sanity"}
    ]
}

const postReducer = (state = initState, action) => {

    switch(action.type) {
        case 'CREATE_POST': {
            console.log("created post", action.post);
            return state;
        }
        case 'CREATE_POST_ERROR': {
            console.log('create post error', action.err);
            return state;
        }
        case 'DELETE_POST':
                console.log('deleted POST', action.postkey);
                return state;
        case 'DELETE_POST_ERROR':
            console.log('delete POST error', action.err);
            return state;
        default: {
            return state;
        }
    }
}

export default postReducer;