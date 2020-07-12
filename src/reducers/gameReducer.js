import { SHUFFLE_CARDS, FLIP_CARD, SET_CARD_STATE } from '../actions';
import shuffle from 'shuffle-array';
import cardPairs from '../data';

const initState = {
    cards: cardPairs,
    selectedCard: null,
    selectedFirst: null,
    selectedSecond: null

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
            
            // flip card action
            // cardSet[action.payload.index].isFront = !cardSet[action.payload.index].isFront

            let selectedCard = { ...state.selectedCard }
            let selectedFirst = { ...state.selectedFirst }
            let selectedSecond = { ...state.selectedSecond }

            selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }

            // console.log(selectedCard, selectedFirst, selectedSecond)

            // if selectedFirst is null
            if (selectedCard && !state.selectedFirst) {
                selectedFirst = selectedCard
                console.log(`First ${selectedFirst.image}`)

            // if selectedFirst not null
            } else if (selectedCard && state.selectedFirst) {
                // if selectedCard not the same card as selectedFirst, add to second
                if (selectedCard.index != selectedFirst.index) {
                    if (selectedCard.image != selectedFirst.image) {
                        console.log(`Second ${selectedCard.image} - No match`)
                        selectedFirst = null
                        selectedCard = null
                    } else {
                        console.log('MATCH')
                        cardSet[selectedFirst.index].matched = true
                        cardSet[selectedCard.index].matched = true 
                        selectedCard = null
                        selectedFirst = null
                    }
                } else {
                    console.log('SAME CARD')
                }
            }
                    
            // console.log((cardSet[selectedSecond.image] == cardSet[selectedFirst.image]))

            // console.log(selectedCard, selectedFirst, selectedSecond)


            // if (selectedFirst && selectedSecond) {
            //     if (selectedFirst == selectedSecond) {
            //         console.log('match')
            //     }
            //     selectedCard = null
            //     selectedFirst = null
            //     selectedSecond = null

            // }
            // // if second click (selectedCard) is same as selectedFirst
            // if ((selectedFirst) == (selectedCard)) {
            //     cardSet[selectedCard.index].isFront = false
            // }
            // if ((selectedFirst) && (!(selectedSecond))) {
            //     selectedSecond = { ...cardSet[action.payload.index], index: action.payload.index }

            //     selectedCard = null

            // }
            
            // if ((selectedFirst) && (selectedSecond)) {
            //     if ((selectedFirst.image) == (selectedSecond.image)) {
            //         cardSet[selectedFirst.index].matched = true
            //         cardSet[selectedSecond.index].matched = true 

            //         selectedCard = null
            //     } else {
            //         selectedFirst = null
            //         selectedSecond = null
            //         selectedCard = null
            //     }
            // }

            // selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }
            
            // // flip action on click
            // cardSet[selectedCard.index].isFront = !cardSet[selectedCard.index].isFront

            return { ...state, cards: cardSet, selectedCard: selectedCard, selectedFirst: selectedFirst, selectedSecond: selectedSecond }


        // case FLIP_CARD:
        //     const cardSet = [...state.cards]

        //     // flips the card on click
        //     cardSet[action.payload.index].isFront = !cardSet[action.payload.index].isFront
            
        //     let selectedCard = { ...state.selectedCard }

        //     if (state.selectedCard != null) {
        //         if (selectedCard.image != cardSet[action.payload.index].image) {
        //             // more gross
        //             cardSet[selectedCard.index].isFront = false
        //             cardSet[action.payload.index].isFront = false 

        //             selectedCard = null
        //         } else {
        //             // cardSet[selectedCard.index].matched = true
        //             // cardSet[action.payload.index].matched = true 
        //             selectedCard = null
        //         }
        //     } else {
        //         selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }
        //     }

        //     return { ...state, cards: cardSet, selectedCard } //, selectedFirst, selectedSecond }

        default:
            return state
    }
} 

export default gameReducer;