// Action Types

export const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
export const FLIP_CARD = 'FLIP_CARD';
export const UNFLIP = 'UNFLIP';

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

export function unflipCard(index) {
    return {
        type: UNFLIP,
        payload: { index }
    }
}

// export function flipCardTimeout(index) {
//     return function (dispatch) {
//         setTimeout(() => {
//             dispatch(flipCard(index))
//         }, 1000)
//     }
// }