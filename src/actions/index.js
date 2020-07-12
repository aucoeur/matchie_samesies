// Action Types

export const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
export const FLIP_CARD = 'FLIP_CARD';

// Action Creators

export function shuffleCards(cards) {
    return { 
        type: SHUFFLE_CARDS,
        payload: { cards }
     };
};

export function flipCard(index) {
    return { 
        type: FLIP_CARD,
        payload: { index }
    };
};

export function flipCardTimeout(index) {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(flipCard(index))
        }, 1000)
    }
}