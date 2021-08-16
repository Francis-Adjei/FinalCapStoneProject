import types from './../types';
import axios from 'axios';

export const serverLogin = (data) => {
    return (dispatch) => {
        return dispatch({
            type: types.LOGIN_SUCCESS,
            payload: data
        })

    }
}