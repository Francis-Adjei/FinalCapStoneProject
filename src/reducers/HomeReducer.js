import types from './../types';

let initialState = {
    data: [],
    loading: false,
    errorMessage: ""
}

export const homeReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case types.LOAD_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload
            }
        case types.LOAD_DATA_FAILURE:
            return {
                ...state,
                errorMessage: payload
            }
        default: return state
    }
}

export default homeReducer;