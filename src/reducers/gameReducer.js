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
            let selectedFirst = { ...state.selectedFirst }
            let selectedSecond = { ...state.selectedSecond }

            // if (selectedCard) {
            //     // if selectedFirst or selectedSecond is null
            //     if (!(selectedFirst)) {
            //         selectedFirst = { ...cardSet[action.payload.index], index: action.payload.index }
            //         console.log(selectedFirst)
            //         selectedCard = null
            //     } 
            //     // if second click (selectedCard) is same as selectedFirst
            //     if ((selectedFirst) == (selectedCard)) {
            //         cardSet[selectedCard.index].isFront = false
            //     }
            //     if ((selectedFirst) && (!(selectedSecond))) {
            //         selectedSecond = { ...cardSet[action.payload.index], index: action.payload.index }

            //         selectedCard = null

            //     }
                
            //     if ((selectedFirst) && (selectedSecond)) {
            //         if ((selectedFirst.image) == (selectedSecond.image)) {
            //             cardSet[selectedFirst.index].matched = true
            //             cardSet[selectedSecond.index].matched = true 

            //             selectedCard = null
            //         } else {
            //             selectedFirst = null
            //             selectedSecond = null
            //             selectedCard = null
            //         }
            //     }
            // } else {
            //     selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }
                
            //     // flip action on click
            //     cardSet[selectedCard.index].isFront = !cardSet[selectedCard.index].isFront
            // }


            if (state.selectedCard != null) {
                if (selectedCard.image != cardSet[action.payload.index].image) {
                    // more gross
                    cardSet[selectedCard.index].isFront = false
                    cardSet[action.payload.index].isFront = false 

                    selectedCard = null
                } else {
                    // cardSet[selectedCard.index].matched = true
                    // cardSet[action.payload.index].matched = true 
                    selectedCard = null
                }
            } else {
                selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }
            }

            return { ...state, cards: cardSet, selectedCard , selectedFirst, selectedSecond }

        default:
            return state
    }
} 

export default gameReducer;