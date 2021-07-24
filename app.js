let min = 1,
  max = 20,
  secretNumber = Math.trunc(Math.random() * 20 + 1),
  score = 20,
  highscore = 0

console.log(secretNumber)
document.querySelector('.score').textContent = score

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  again = document.querySelector('#again'),
  message = document.querySelector('.message')

minNum.textContent = min
maxNum.textContent = max
message.textContent = `Start guessing...`

function displayMessage(msg) {
  message.textContent = msg
}

guessBtn.addEventListener('click', function () {
  console.log(guessInput.value)
  console.log(secretNumber)

  const guess = Number(guessInput.value)
  console.log(guess, typeof guess)

  // NO GUESS
  if (!guess) {
    displayMessage(`Please guess a number between ${min} and ${max}`)
    console.log(message)
  } else if (guess === secretNumber) {
    displayMessage(`You win the game`)
    guessInput.style.borderColor = 'blue'
    document.querySelector('body').style.backgroundColor = '#28b487'

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low')
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.score').textContent = 0
      diplayMessage(`You lost the game, Play again`)
    }
  }
})

// REPLAY

again.addEventListener('click', function () {
  score = 20
  document.querySelector('.score').textContent = score
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  message.textContent = `Start guessing...`
  guessInput.value = ''
  document.querySelector('body').style.backgroundColor = 'orangered'
})
