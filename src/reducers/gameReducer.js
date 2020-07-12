import { SHUFFLE_CARDS, FLIP_CARD } from '../actions'; //
import shuffle from 'shuffle-array';
import cardPairs from '../data';

// import { store } from '../index';
// import { useDispatch } from 'react-redux';

const initState = {
    cards: cardPairs,
    selectedCard: null,
    selectedFirst: null,
}

// 

const gameReducer = (state = initState, action) => {
    // const dispatch = useDispatch
    switch (action.type) {
        case SHUFFLE_CARDS:
            const cardPairs = state.cards
            const shuffledCards = shuffle(cardPairs)
            return { ...state, cards: shuffledCards }

        case FLIP_CARD:
            const cardSet = [...state.cards]
            
            // flip card action
            cardSet[action.payload.index].isFront = !cardSet[action.payload.index].isFront

            let selectedCard = { ...state.selectedCard }
            let selectedFirst = { ...state.selectedFirst }

            selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }

            // if (!(state.selectedFirst)) {
            //     console.log(state.selectedFirst)
            // }

            // if selectedFirst is null
            if (selectedCard && !state.selectedFirst) {
                // flip card action
                // cardSet[action.payload.index].isFront = !cardSet[action.payload.index].isFront
                selectedFirst = selectedCard
                console.log(`First ${selectedFirst.image}`)

            // if selectedFirst not null
            } else if (selectedCard && state.selectedFirst) {
                // if selectedCard not the exact card as selectedFirst
                if (selectedCard.index !== selectedFirst.index) {
                    // if current selected and first don't match
                    if (selectedCard.image !== state.selectedFirst.image) {
                        cardSet[state.selectedFirst.index].isFront = false
                        // selectedFirst = selectedCard
                        cardSet[selectedCard.index].isFront = false
                        console.log(selectedFirst.image, selectedCard.image)
                        console.log(`Second ${selectedCard.image} - No match`)
                        return { ...state, cards: cardSet, selectedCard:null, selectedFirst: null}
                    } else {
                        console.log(selectedFirst.image, selectedCard.image)
                        console.log('MATCH')
                        cardSet[selectedFirst.index].matched = true
                        cardSet[selectedCard.index].matched = true 
                        return { ...state, cards: cardSet, selectedCard: null, selectedFirst: null}
                    }
                } else {
                    console.log('SAME CARD')
                }
            }

            return { ...state, cards: cardSet, selectedCard: selectedCard, selectedFirst: selectedFirst}


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

        //             // selectedCard = null
        //             selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }
        //         } else {
        //             cardSet[selectedCard.index].matched = true
        //             cardSet[action.payload.index].matched = true 
        //             // selectedCard = null
        //             selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }
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