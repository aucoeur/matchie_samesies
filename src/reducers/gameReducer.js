import { SHUFFLE_CARDS, FLIP_CARD, flipCard } from '../actions';
import shuffle from 'shuffle-array';
import cardPairs from '../data';

import { store } from '../index';
// import { useDispatch } from 'react-redux';

const initState = {
    cards: cardPairs,
    selectedCard: null,
    selectedFirst: null,
    selectedSecond: null

}

// 

const gameReducer = (state = initState, action) => {
    // const dispatch = useDispatch
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
            cardSet[action.payload.index].isFront = !cardSet[action.payload.index].isFront

            let selectedCard = { ...state.selectedCard }
            let selectedFirst = { ...state.selectedFirst }
            let selectedSecond = { ...state.selectedSecond }

            selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }

            // if selectedFirst is null
            if (selectedCard && !state.selectedFirst) {
                // flip card action
                // cardSet[action.payload.index].isFront = !cardSet[action.payload.index].isFront
                selectedFirst = selectedCard
                console.log(`First ${selectedFirst.image}`)

            // if selectedFirst not null
            } else if (selectedCard && state.selectedFirst) {
                // if selectedCard not the same card as selectedFirst, add to second
                if (selectedCard.index != selectedFirst.index) {
                    if (selectedCard.image != selectedFirst.image) {
                        // cardSet[selectedFirst.index].isFront = false
                        // cardSet[selectedCard.index].isFront = false

                        // setTimeout(() => {
                        //     store.dispatch(flipCard(selectedCard.index))
                        //     store.dispatch(flipCard(selectedFirst.index))
                        // }, 1000) 

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