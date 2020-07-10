import randomColor from 'randomcolor';

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

const randomCards = randomColors.map((color, i) => {
    return {
        color, 
        image: images[i],
        isFront: false
    }
})

// const backColor = randomColor(
    // {luminosity: 'dark', hue: 'blue'});

const cardPairs = [...randomCards, ...randomCards]

export default cardPairs;