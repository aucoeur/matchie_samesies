import randomColor from 'randomcolor';
import shuffle from 'shuffle-array';

function generateCards() {
    const randomColors = randomColor({
        count: 8,
        luminosity: 'bright',
        // format: 'rgb'
        });

    const backSide = randomColor(
        {luminosity: 'dark', hue:'blue', format: 'rgb'});

    const images = [
        "beardo.png",
        "beau.png",
        "bunnie.png",
        "celeste.png",
        "cesar.png",
        "chester.png",
        "coco.png",
        "croque.png",
        "daisy_mae.png",
        "derwin.png",
        "doc.png",
        "dotty.png",
        "flora.png",
        "gaston.png",
        "hans.png",
        "ketchup.png",
        "kk_slider.png",
        "kyle.png",
        "leif.png",
        "lolly.png",
        "lopez.png",
        "mira.png",
        "pascal.png",
        "punchy.png",
        "roald.png",
        "truffles.png"
    ]

    function generateCardSet() {
        const items = new Set()
        while (items.size < 8) { 
            let index = Math.floor(Math.random()*images.length)
            items.add(images[index])
        }
        return [...items]
    }

    const cardSet = generateCardSet()

    const randomCards = randomColors.map((color, i) => {
        return {
            color, 
            image: cardSet[i],
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