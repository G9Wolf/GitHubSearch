import { createStore } from 'redux';

const initialState = {
    valorForm: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VALOR_FORM_REDUX':
            return {
                ...state,
                valorForm: action.payload,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;