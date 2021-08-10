import types from './../types';
import axios from 'axios';

export const serverLogin = (data) => {
    return (dispatch) => {

        const headers = {
            "Content-type": "application/json"
        }

        axios({
            headers,
            url: 'login',
            data,
            method: 'post'
        }).then((response) => {
            if (response.data.success === "true") {
                return dispatch({
                    type: types.LOGIN_SUCCESS,
                    payload: response.data
                })
            } else if (response.data.success === "false") {
                dispatch({
                    type: types.LOGIN_FAIL,
                    payload: response.data
                })
                dispatch({
                    type: types.LOADING,
                    payload: "false"
                });

                return
            }
        }).catch((err) => {
            dispatch({
                type: types.LOGIN_FAIL,
                payload: {
                    "sucess": "false",
                    "msg": "Your request failed! Please check your internet and try again",
                    "data": []
                }
            })
            dispatch({
                type: types.LOADING,
                payload: "false"
            });
        })
    }
}