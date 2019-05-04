const SET_CURRENT_USER = "SET_CURRENT_USER";
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuth: false,
    user: {}
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        default: return state;
    }
}