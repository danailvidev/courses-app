import { Action } from '@ngrx/store';
export const LOAD_COURSES = 'LOAD_COURSES;';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS;';
export const CREATE_COURSE = 'CREATE_COURSE;';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS;';
export const UPDATE_COURSE = 'UPDATE_COURSE;';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS;';
export const DELETE_COURSE = 'DELETE_COURSE;';
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS;';

export class LoadCoursesAction {
    readonly type = LOAD_COURSES;
    constructor(public payload?: any) { }
}

export class LoadCoursesSuccessAction {
    readonly type = LOAD_COURSES_SUCCESS;
    constructor(public payload?: any) { }
}

export class DeleteCourseAction {
    readonly type = DELETE_COURSE;
    constructor(public payload?: any) { }
}

export class DeleteCourseSuccessAction {
    readonly type = DELETE_COURSE_SUCCESS;
    constructor(public payload?: any) { }
}

export class CreateCourseAction {
    readonly type = CREATE_COURSE;
    constructor(public payload?: any) { }
}

export class CreateCourseSuccessAction {
    readonly type = CREATE_COURSE_SUCCESS;
    constructor(public payload?: any) { }
}

export class UpdateCourseAction {
    readonly type = UPDATE_COURSE;
    constructor(public payload?: any) { }
}

export class UpdateCourseSuccessAction {
    readonly type = UPDATE_COURSE_SUCCESS;
    constructor(public payload?: any) { }
}

export type Action
    = LoadCoursesAction
    | LoadCoursesSuccessAction
    | CreateCourseAction
    | CreateCourseSuccessAction
    | UpdateCourseAction
    | UpdateCourseSuccessAction
    | DeleteCourseAction
    | DeleteCourseSuccessAction;
