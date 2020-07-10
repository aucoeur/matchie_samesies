import { SHUFFLE_CARDS, FLIP_CARD, SET_CARD_STATE } from '../actions';
import shuffle from 'shuffle-array';
import cardPairs from '../data';

const initState = {
    cards: cardPairs,
    selectedCard: null
}

// 

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case SHUFFLE_CARDS:
            const cardPairs = state.cards
            const shuffledCards = shuffle(cardPairs)
            return { ...state, cards: shuffledCards }

        // case SET_CARD_STATE:
        //     const newState = { ...state }
        //     newState.cards[action.payload.index].[put somethign else] = action.payload.status
        //     return newState
        case FLIP_CARD:
            const cardSet = [...state.cards]

            cardSet[action.payload.index].isFront = !cardSet[action.payload.index].isFront
            
            let selectedCard = { ...state.selectedCard }


            if (state.selectedCard != null) {
                if (selectedCard.image != cardSet[action.payload.index].image) {
                    // more gross
                    cardSet[selectedCard.index].isFront = false
                    cardSet[action.payload.index].isFront = false 

                    selectedCard = null
                } else {
                    selectedCard = null
                }
            } else {
                selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }
            }


            return { ...state, cards: cardSet, selectedCard }

        default:
            return state
    }
} 

export default gameReducer;