const initialState = {
    users: [
        {
            name: 'Mr Robot',
        },
    ],
};

const addUser = (name) => {
    return {
        type: 'user/add-user',
        payload: name,
    };
};

export default function userReducer(state = initialState, action) {
    return {
        ...state,
    };
}
