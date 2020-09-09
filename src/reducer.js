export const initialState = {
    basket: [],//video 1:30:00    1:15:00
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
              };
            default:
                return state;
    }
};

export default reducer;