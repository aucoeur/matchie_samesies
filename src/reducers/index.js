import { SHUFFLE_CARDS, FLIP_CARD } from '../actions';
// import shuffle from 'shuffle-array';
import cardPairs from '../data';

const initState = {
    cards: cardPairs
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case SHUFFLE_CARDS:
            return [
                ...state, 
                {
                    index: action.index,
                }
            ]
        case FLIP_CARD:
            // return state.map((card) => (card.index === action.id) ? {...card, isFront : !card.isFront} : card)
            console.log(state)
            return {
                ...state,
                cards: [
                    ...(state.cards.map((card, index) =>
                        (index === action.index) ? { 
                                ...card, isFront: !card.isFront } : card
                    ))
                ]
            } 
                    
        default:
            return state
    }
} 

export default gameReducer;