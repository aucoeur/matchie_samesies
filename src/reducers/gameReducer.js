import { SHUFFLE_CARDS, FLIP_CARD, UNFLIP, unflipCard } from '../actions'; //
import generateCards from '../data';

import { store } from '../index';

const initState = {
    cards:  generateCards(),
    selectedCard: null,
    selectedFirst: null,
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case SHUFFLE_CARDS:
            let cards = [ ...state.cards ]
            cards = generateCards()

            return { ...state, cards: cards , selectedCard: null, selectedFirst: null }

        case UNFLIP:
            // unflips card at index

            const theCards = [ ...state.cards ]
            
            theCards[action.payload.index].isFront = false

            return { ...state, cards: theCards, selectedFirst: null, selectedCard: null }

        case FLIP_CARD:

            const index = action.payload.index
            const cardSet = [...state.cards]
            
            // flip card action
            cardSet[index].isFront = !cardSet[index].isFront
            
            // if selectedCard is first
            if (state.selectedFirst == null) {
                return { ...state, cards: cardSet, selectedFirst: index }

            // if selectedCard is exact same as selectedFirst
            } else if ( state.selectedFirst === index ) {
                return state
                
            // else compare cards
            } else {
                // if the two card images are same
                if (state.cards[index].image === state.cards[state.selectedFirst].image) {
                    // cards match!
                    return { ...state, selectedFirst: null, 
                        cards: state.cards.map((card) => {
                            if (card.image === state.cards[state.selectedFirst].image) {
                                return { ...card, matched: true, isFront: true }
                            }
                            return card
                        }) 
                    }
                } else {
                    // No match :(
                    setTimeout(() => {
                        store.dispatch(unflipCard(index))
                        store.dispatch(unflipCard(state.selectedFirst))

                    }, 400)
                    return { ...state, cards: cardSet, selectedFirst: null, selectedCard: null }
                }
            }

        default:
            return state
    }
} 

export default gameReducer;