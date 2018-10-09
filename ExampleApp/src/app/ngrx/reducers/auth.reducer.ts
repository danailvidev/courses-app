import * as authActions from './../actions/auth.actions';

export function authReducer(state = [], action: authActions.Action) {
    switch (action.type) {
        case authActions.GET_CURRENT_USER_DATA_SUCCESS: {
            return action.payload;
        }
        case authActions.LOGOUT_USER_SUCCESS: {
            state = undefined;
            return state;
        }
        case authActions.LOGIN_USER: {
            return action.payload;
        }
        case authActions.LOGIN_USER_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
