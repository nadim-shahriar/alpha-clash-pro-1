function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}
function getTextElementById(elementId) {
    const currentScoreElement = document.getElementById(elementId)
    const currentScore = currentScoreElement.innerText
    const value = parseInt(currentScore)
    return value;
}
function setTextElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getElementTextById(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText
    return text;
}

function getARandomAlphabet() {
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');


    // get a random index between 0 - 25
    const randomNumber = Math.random() * 25
    const randomIndex = Math.round(randomNumber)

    const alphabet = alphabets[randomIndex]
    return alphabet;
}