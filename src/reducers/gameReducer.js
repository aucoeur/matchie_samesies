import { SHUFFLE_CARDS, FLIP_CARD } from '../actions';
import shuffle from 'shuffle-array';
import cardPairs from '../data';

const initState = {
    cards: cardPairs,
    selectedFirst: null,
    selectedSecond: null,
    selectedCard: null
}

// 

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case SHUFFLE_CARDS:
            const cardPairs = state.cards
            const shuffledCards = shuffle(cardPairs)
            return { ...state, cards: shuffledCards }

        case FLIP_CARD:
            const cardSet = [...state.cards]

            cardSet[action.payload.index].isFront = !cardSet[action.payload.index].isFront
            
            let selectedCard = { ...state.selectedCard }

            if (state.selectedCard) {
                if (selectedCard.image != cardSet[action.payload.index].image) {
                    cardSet[selectedCard.index].isFront = false
                    cardSet[action.payload.index].isFront = false 

                    selectedCard = null
                } else {
                    cardSet[selectedCard.index].matched = true
                    cardSet[action.payload.index].matched = true 
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