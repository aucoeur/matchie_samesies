import randomColor from 'randomcolor';
import shuffle from 'shuffle-array';

function generateCards() {
    const randomColors = randomColor({
        count: 8,
        luminosity: 'bright',
        // format: 'rgb'
        });

    const images = [
        "daisy_mae.png",
        "derwin.png",
        "flora.png",
        "gaston.png",
        "hans.png",
        "leif.png",
        "pascal.png",
        "truffles.png"
    ]
    const backSide = randomColor(
        {luminosity: 'dark', hue: 'blue', format: 'rgb'});

    const randomCards = randomColors.map((color, i) => {
        return {
            color, 
            image: images[i],
            isFront: false,
            backColor: backSide,
            matched: false
        }
    })

    //  'garbage' way to deep copy
    const secondCards = JSON.parse(JSON.stringify(randomCards))

    const cardPairs = [...randomCards, ...secondCards]


    return shuffle(cardPairs)
}

export default generateCards;