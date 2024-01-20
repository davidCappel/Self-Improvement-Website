const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const depressButton = document.getElementById('depress-btn')
const anxietyButton = document.getElementById('anxiety-btn')
const medButton = document.getElementById('med-btn')
const lawButton = document.getElementById('law-btn')
const mmaButton = document.getElementById('mma-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-button')

let shuffledQuestions, currentQuestionIndex, points, add

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
function placebutton(){

if(points<=18){
  mmaButton.classList.remove('hide')
  }else if((points>=19)&&(points<=20)){
    lawButton.classList.remove('hide')
  }else if((points>=20)&&(points<=21.6)){
    lawButton.classList.remove('hide')
    anxietyButton.classList.remove('hide')
  }
  else if(points>=22){
  anxietyButton.classList.remove('hide')
  depressButton.classList.remove('hide')
  medButton.classList.remove('hide')
  lawButton.classList.remove('hide')
  }

}


function placebutton2() {

}
function startGame() {
  console.log('Started')
  startButton.classList.add('hide')
  depressButton.classList.add('hide')
  anxietyButton.classList.add('hide')
  medButton.classList.add('hide')
  lawButton.classList.add('hide')
  mmaButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  points = 0
  add = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  questionContainerElement.classList.remove('hide')
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {

  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')

    points = points + (add / 5)
    add = 0
    console.log(points)

  } else {
    points = points + (add / 5)
    add = 0
    console.log(points)
    placebutton()
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    questionContainerElement.classList.add('hide')
    add = add + 1

  } else {
    element.classList.add('wrong')
    add = add + 5


  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Do you love yourself',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false },
      { text: 'Absolutley', correct: true },
      { text: 'I dont really know...', correct: false }
    ]
  },
  {
    question: 'Do you You have a high sense of self confidence?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false },
      { text: 'Yes but I wold love to know more', correct: false },
      { text: 'I dont really know...', correct: true }
    ]
  },
  {
    question: 'Do you strive to please others?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true },
      { text: 'The only person I strive for is me', correct: true },
      { text: 'I dont really know...', correct: true }
    ]
  },
  {
    question: 'Do you belive in your ability to succeed 100%',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false },
      { text: 'You can not stop me ', correct: true },
      { text: 'I dont really know...', correct: false }
    ]
  },
  {
    question: 'Do you feel uncomfortable around alot of people?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true },
      { text: 'I am great in crowds', correct: true },
      { text: 'I dont really know...', correct: true }
    ]
  },
  {
    question: 'Are you a good speaker?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false },
      { text: 'Maybe, but I could be better', correct: false },
      { text: 'I dont really know...', correct: true }
    ]
  },
  {
    question: 'Are you good at stadning up for other peopele and yourself?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: false },
      { text: 'Maybe', correct: true },
      { text: 'I dont really know...', correct: true }
    ]
  }
]
