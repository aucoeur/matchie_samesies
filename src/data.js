import randomColor from 'randomcolor';
import shuffle from 'shuffle-array';

const randomColors = randomColor({
    count: 8,
    luminosity: 'bright',
    // format: 'rgb' // e.g. 'rgb(225,200,20)'
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
    {luminosity: 'dark', hue: 'blue'});

const backSide = randomColor({luminosity: 'dark', hue: 'blue'});

const randomCards = randomColors.map((color, i) => {
    return {
        color, 
        image: images[i],
        isFront: true,
        backColor: backSide,
        matched: false
    }
})

//  garbage way to deep copy
const secondCards = JSON.parse(JSON.stringify(randomCards))

const cardPairs = [...randomCards, ...secondCards]

export default shuffle(cardPairs);