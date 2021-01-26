const button = document.querySelector('#button')
const upperWord = document.querySelector('#defaltWord')
const input = document.querySelector('#input')

const firstWord = '선호'
const usedWords = []

usedWords.push(firstWord)
upperWord.textContent = firstWord
input.focus()

button.addEventListener('click', () => {
    const error = document.querySelector('#error')

    const word = upperWord.textContent
    const inputValue = input.value
    const lastIndex = word.length - 1

    if (usedWords.includes(inputValue)) {
        error.textContent = '이미 사용된 단어입니다.'
    }

    if (!usedWords.includes(inputValue)) {
        if (word[lastIndex] === inputValue[0]) {
            upperWord.textContent = inputValue
            usedWords.push(inputValue)
            error.textContent = ''
        } else {
            error.textContent = '틀렸습니다.'
        }
    }

    input.value = ''
    input.focus()
})
