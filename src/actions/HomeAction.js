import types from './../types';
import axios from 'axios';

export const serverGetQuotes = () => {
    return (dispatch) => {

        const headers = {
            "Content-type": "application/json"
        }

        axios({
            headers,
            url: 'https://api.quotable.io/random',
            method: 'get'
        }).then((response) => {

            return dispatch({
                type: types.LOAD_DATA_SUCCESS,
                payload: response.data
            })

        }).catch((err) => {
            dispatch({
                type: types.LOAD_DATA_FAILURE,
                payload: "false"
            });
        })
    }
}