const scoreCounter = document.querySelector('.score-counter')
const randomWordEl = document.querySelector('.random-word')
const textInput = document.querySelector('.text-input')
const timeEl = document.querySelector('.time')
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal-btn')

textInput.focus()

const api = 'https://random-words-api.vercel.app/word'

let randomWord

let score = 0

let time = 15

function get() {
    fetch(api)
    .then((data) => {
        return data.json()
    })
    .then(getWord)
}

get()

function getWord(e) {
    randomWord = e[0].word.toLowerCase()
    randomWordEl.textContent = randomWord
}

textInput.addEventListener('input', () => {
    if (randomWord == textInput.value) {
        get()
        textInput.value = ''
        score++
        scoreCounter.textContent = score
        time += 5
    }
})

setInterval(() => {
    if (time) {
        time--
        timeEl.textContent = time
    } else {
        modal.classList.remove('hidden')
        document.querySelector('.overlay').classList.remove('hidden')
    }
}, 1000);

modalBtn.addEventListener('click', () => {
   location.reload()
})