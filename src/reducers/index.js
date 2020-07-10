import { SET_CARD_STATE, SHUFFLE_CARDS, FLIP_CARD, CardState } from '../actions';
import shuffle from 'shuffle-array';

// import cardPairs from '../data';


const gameReducer = (state = [], action) => {
    switch (action.type) {
        case SHUFFLE_CARDS:
            return [
                ...state, 
                {
                    index: action.index,
                }
            ]
        // case SET_CARD_STATE:
        //     return Object.assign({}, state, {
        //         cardState: action.status
        //     })
        case FLIP_CARD:
            // return state.map((card) => (card.index === action.id) ? {...card, isFront : !card.isFront} : card)
            let index = action.index;
            console.log(state)
            return {
                ...state,
                [index]: {
                    ...state[index],
                    isFront: !state[index].isFront
                }
            } 
        default:
            return state
    }
} 

export default gameReducer;