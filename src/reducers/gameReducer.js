import { SHUFFLE_CARDS, FLIP_CARD, UNFLIP, flipCard, unflipCard } from '../actions'; //
import shuffle from 'shuffle-array';
import cardPairs from '../data';

import { store } from '../index';

const initState = {
    cards: cardPairs,
    selectedCard: null,
    selectedFirst: null,
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case SHUFFLE_CARDS:
            const cardPairs = initState.cards
            const shuffledCards = shuffle(cardPairs)
            return { ...state, cards: shuffledCards }

        case UNFLIP:
            // unflips card at index
            console.log('unflip')
            return { ...state, selectedFirst: null, selectedCard: null, 
                        cards: state.cards.map((card) => {
                            return { ...card, isFront: false}
                            })
                    }

        case FLIP_CARD:
            console.log(FLIP_CARD)
            const index = action.payload.index
            const cardSet = [...state.cards]
            
            // flip card action
            cardSet[index].isFront = !cardSet[index].isFront
            
            // if the index = first selected
            if (state.selectedFirst == null) {
                
                // flip card action
                // cardSet[index].isFront = !cardSet[index].isFront
                return { ...state, cards: cardSet, selectedFirst: index }
            } else if ( state.selectedFirst === index ) {
                return state
            } else {
                if (state.cards[index].image === state.cards[state.selectedFirst].image) {
                    // cards match!
                    return { ...state, selectedFirst: null, 
                        cards: state.cards.map((card) => {
                            if (card.index === index || card.index === state.selectedFirst) {
                                return { ...card, matched: true, isFront: true }
                            }
                            return card
                    }) }
                } else {
                    // No match :(
                    // cardSet[index].isFront = !cardSet[index].isFront
                    setTimeout(() => {
                        console.log('No match')
                        store.dispatch(unflipCard(index))
                        store.dispatch(unflipCard(state.selectedFirst))
                        // return { ...state, selectedFirst: null, selectedCard: null, cards: state.cards.map((card) => {
                        //     if (!card.matched) {
                        //         return { ...card, isFront: false }
                        //     }
                        // })}
                    }, 500)
                    return { ...state, cards: cardSet, selectedFirst: index }
                }
            }
        // case FLIP_CARD:

        //     const cardSet = [...state.cards]
            
        //     // flip card action
        //     cardSet[action.payload.index].isFront = !cardSet[action.payload.index].isFront

        //     let selectedCard = { ...state.selectedCard }
        //     let selectedFirst = { ...state.selectedFirst }

        //     selectedCard = { ...cardSet[action.payload.index], index: action.payload.index }

        //     console.log(selectedCard, state.selectedFirst)
        //     // if selectedFirst is null
        //     if (!state.selectedFirst) {
        //         selectedFirst = selectedCard
        //         console.log(`First ${selectedFirst.image}`)

        //     // if selectedFirst not null
        //     } else if (state.selectedFirst) {
        //         if (selectedCard.index == selectedFirst.index) {
        //             console.log('SAME CARD')
        //             return state
        //         }

        //         // // if selectedCard not the exact card as selectedFirst
        //         // if (selectedCard.index !== selectedFirst.index) {
        //         //     // if current selected and first don't match
        //         //     if (selectedCard.image !== state.selectedFirst.image) {
        //         //         cardSet[state.selectedFirst.index].isFront = false
        //         //         cardSet[selectedCard.index].isFront = false

        //         //         console.log(selectedFirst.image, selectedCard.image)
        //         //         console.log(`Second ${selectedCard.image} - No match`)
                        
        //         //         return { ...state, cards: cardSet, selectedCard:null, selectedFirst: null}
        //         //     } else {
        //         //         console.log(selectedFirst.image, selectedCard.image)
        //         //         console.log('MATCH')

        //         //         cardSet[selectedFirst.index].matched = true
        //         //         cardSet[selectedCard.index].matched = true 

        //         //         return { ...state, cards: cardSet, selectedCard: null, selectedFirst: null}
        //         //     }
        //         // } else {
        //         //     console.log('SAME CARD')
        //         // }
        //     }

            // return { ...state, cards: cardSet, selectedCard: selectedCard, selectedFirst: selectedFirst}

        default:
            return state
    }
} 

export default gameReducer;