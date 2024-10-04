// function play() {
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection.classList)

// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed :', playerPressed)

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet, playerPressed)

    // check matched or not
    if (expectedAlphabet === playerPressed) {
        console.log('You got a point')

        const currentScore = getTextElementById('current-score')
        const newScore = currentScore + 1;
        setTextElementById('current-score', newScore);
        console.log(newScore)

        // // update score
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreValue = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreValue)

        // // increase score by 1
        // const newScore = currentScore + 1;

        // // show the updated value
        // currentScoreElement.innerText = newScore
        // // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();

    }
    else {
        console.log('You lost a life')

        const currentLife = getTextElementById('life-left')
        const updatedLife = currentLife - 1;
        setTextElementById('life-left', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }


        // // get the current life number 
        // const lifeNumberElement = document.getElementById('life-left')
        // const lifeNumberValue = lifeNumberElement.innerText
        // const lifeNumber = parseInt(lifeNumberValue)

        // // increase life by 1
        // const newLife = lifeNumber - 1;
        // // show 
        // lifeNumberElement.innerText = newLife
    }

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame() {
    //step-1 generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet :', alphabet)

    //set randomly generated alphabet to the screen show it
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet)
}

function play() {
    hideElementById('home-screen')
    hideElementById('score')
    showElementById('play-ground')

    // reset score and life
    setTextElementById('current-score', 0)
    setTextElementById('life-left', 5)

    continueGame()
}

function gameOver() {
    hideElementById('play-ground')
    showElementById('score')

    const lastScore = getTextElementById('current-score')
    console.log(lastScore)
    setTextElementById('last-score', lastScore)

    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet)
}