// Action Types

export const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
export const FLIP_CARD = 'FLIP_CARD';
export const SET_CARD_STATE = 'SET_CARD_STATE';

// Other Constants
export const CardState = {
    FACE_UP: 'FACE_UP',
    FACE_DOWN: 'FACE_DOWN',
    MATCHED_PAIR: 'MATCHED_PAIR'
};

// Action Creators

export function shuffleCards(cards) {
    return { 
        type: SHUFFLE_CARDS,
        payload: { cards }
     };
};

export function flipCard(index, check=true) {
    return { 
        type: FLIP_CARD,
        payload: { index, check }
    };
};

export function setCardState(status, index) {
    return {
        type: SET_CARD_STATE,
        payload: { status, index }
    }
}