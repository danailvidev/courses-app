import * as courseActions from './../actions/course.actions';

export function courseReducer(state = [], action: courseActions.Action) {
    switch (action.type) {
        case courseActions.LOAD_COURSES_SUCCESS: {
            return action.payload;
        }
        case courseActions.DELETE_COURSE_SUCCESS: {
            return state.filter(course => course.id !== action.payload);
        }
        case courseActions.UPDATE_COURSE_SUCCESS: {
            return [...state, action.payload];
        }
        case courseActions.CREATE_COURSE_SUCCESS: {
            return [...state, action.payload];
        }
        default: {
            return state;
        }
    }
}
