const DATA = [
    {
        question: 'Что из этого не является косметическим средством?',
        answers: [
            {
                id: 1,
                value: 'Помада',
                correct: false,
            },
            {
                id: 2,
                value: 'Татуировка',
                correct: true,
            },
            {
                id: 3,
                value: 'Крем',
                correct: false,
            },
            {
                id: 4,
                value: 'Пудра',
                correct: false,
            },
        ]
    },
    {
        question: 'Кто, в конце концов, скушал Колобка?',
        answers: [
            {
                id: 5,
                value: `Дед`,
                correct: false,
            },
            {
                id: 6,
                value: 'Баба',
                correct: false,
            },
            {
                id: 7,
                value: 'Лиса',
                correct: true,
            },
            {
                id: 8,
                value: 'Пешка',
                correct: false,
            },
        ]
    },
    {
        question: 'Какой шахматной фигуры не существует?',
        answers: [
            {
                id: 9,
                value: `Пешка`,
                correct: false,
            },
            {
                id: 10,
                value: 'Конь',
                correct: true,
            },
            {
                id: 11,
                value: 'Король',
                correct: false,
            },
            {
                id: 12,
                value: 'Дама',
                correct: false,
            },
        ]
    },
    {
        question: 'Что означает буква «О» в аббревиатуре ОРТ?',
        answers: [
            {
                id: 13,
                value: `Олигархическое`,
                correct: false,
            },
            {
                id: 14,
                value: 'Объективное',
                correct: false,
            },
            {
                id: 15,
                value: 'Общественное',
                correct: true,
            },
            {
                id: 16,
                value: 'Однообразное',
                correct: false,
            },
        ]
    },
    {
        question: 'Главный герой в романе Ф. И. Достоевского «Преступление и наказание»',
        answers: [
            {
                id: 17,
                value: `Расторгуев`,
                correct: false,
            },
            {
                id: 18,
                value: 'Чикатило',
                correct: false,
            },
            {
                id: 19,
                value: 'Тумбочкин',
                correct: false,
            },
            {
                id: 20,
                value: 'Раскольников',
                correct: true,
            },
        ]
    },
    {
        question: 'Как назывался первый советский фильм-катастрофа?',
        answers: [
            {
                id: 21,
                value: `34-й скорый`,
                correct: false,
            },
            {
                id: 22,
                value: 'Экипаж',
                correct: true,
            },
            {
                id: 23,
                value: 'Потерялся слон',
                correct: false,
            },
            {
                id: 24,
                value: 'Воспоминания о будущем',
                correct: true,
            },
        ]
    },
    {
        question: 'Какой газ преобладает в атмосфере Земли?',
        answers: [
            {
                id: 25,
                value: `Кислород`,
                correct: false,
            },
            {
                id: 26,
                value: 'Водород',
                correct: false,
            },
            {
                id: 27,
                value: 'Углекислый газ',
                correct: false,
            },
            {
                id: 28,
                value: 'Азот',
                correct: true,
            },
        ]
    },
    {
        question: 'Как называется крепкий спиртной напиток из сока сахарного тростника?',
        answers: [
            {
                id: 29,
                value: 'Кальвадос',
                correct: false,
            },
            {
                id: 30,
                value: 'Ром',
                correct: true,
            },
            {
                id: 31,
                value: 'Джин',
                correct: false,
            },
            {
                id: 32,
                value: 'Виски',
                correct: false,
            },
        ]
    },
    {
        question: 'Какую птицу американцы традиционно готовят на День Благодарения?',
        answers: [
            {
                id: 33,
                value: `Курицу`,
                correct: false,
            },
            {
                id: 34,
                value: 'Гуся',
                correct: false,
            },
            {
                id: 35,
                value: 'Утку',
                correct: true,
            },
            {
                id: 36,
                value: 'Индейку',
                correct: true,
            },
        ]
    },
    {
        question: 'Какого цвета нет на государственном флаге Армении?',
        answers: [
            {
                id: 37,
                value: `Красного`,
                correct: false,
            },
            {
                id: 38,
                value: 'Синего',
                correct: false,
            },
            {
                id: 39,
                value: 'Оранжевого',
                correct: false,
            },
            {
                id: 40,
                value: 'Белого',
                correct: true,
            },
        ]
    },
    {
        question: 'Какой город считается родиной джаза?',
        answers: [
            {
                id: 41,
                value: `Чикаго`,
                correct: false,
            },
            {
                id: 42,
                value: 'Нью-Йорк',
                correct: false,
            },
            {
                id: 43,
                value: 'Новый Орлеан',
                correct: true,
            },
            {
                id: 44,
                value: 'Одесса',
                correct: false,
            },
        ]
    },
    {
        question: 'Премьера какой программы состоялась 1 января 1968 года?',
        answers: [
            {
                id: 45,
                value: `«Время»`,
                correct: true,
            },
            {
                id: 46,
                value: '«Голубой огонёк»',
                correct: false,
            },
            {
                id: 47,
                value: '«Кинопанорама»',
                correct: false,
            },
            {
                id: 48,
                value: '«Очевидное-невероятное»',
                correct: true,
            },
        ]
    },
    {
        question: 'Какой камень венчает Большую императорскую корону Российской империи, хранящуюся в Алмазном фонде?',
        answers: [
            {
                id: 49,
                value: `Алмаз`,
                correct: false,
            },
            {
                id: 50,
                value: 'Сапфир',
                correct: false,
            },
            {
                id: 51,
                value: 'Благородная шпинель',
                correct: true,
            },
            {
                id: 52,
                value: 'Рубин',
                correct: false,
            },
        ]
    },
    {
        question: 'Что в свободное время мастерил химик Д. И. Менделеев?',
        answers: [
            {
                id: 53,
                value: `Игрушки`,
                correct: false,
            },
            {
                id: 54,
                value: 'Табуретки',
                correct: false,
            },
            {
                id: 55,
                value: 'Прялки',
                correct: false,
            },
            {
                id: 56,
                value: 'Чемоданы',
                correct: true,
            },
        ]
    },
    {
        question: 'С какой фигуры начинаются соревнования по городошному спорту?',
        answers: [
            {
                id: 57,
                value: `Часовые`,
                correct: false,
            },
            {
                id: 58,
                value: 'Артиллерия',
                correct: false,
            },
            {
                id: 59,
                value: 'Пулемётное гнездо',
                correct: false,
            },
            {
                id: 60,
                value: 'Пушка',
                correct: true,
            },
        ]
    },
]
const myModal = new bootstrap.Modal(document.querySelector(".myModal"))
const questionAndAnswers = document.querySelector('.questionAndAnswers');
const scoreCounter = document.querySelector('.score_counter')
const point = scoreCounter.querySelectorAll('li')
const result = document.querySelector(".result")
const fireproof = document.querySelector(".fireproof")
function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const pointsDisplayShow = (index) => {
    point[index].classList.add('active')
    if (index != 0) {
        point[index - 1].classList.remove('active')
    }
    if (index === 4) {
        scoreCounter.querySelectorAll('li')[index].classList.add('fireproof-amount')
    }
    if (index === 9) {
        scoreCounter.querySelectorAll('li')[index].classList.add('fireproof-amount')
    }
}

const pointsDisplayRemove = () => {
    for (let i = 0; i < DATA.length; i++) {
        scoreCounter.querySelectorAll('li')[i].classList.remove('active')
        scoreCounter.querySelectorAll('li')[i].classList.remove('fireproof-amount')
    }
}
const callFriend = (index, event) => {
    let correct;
    DATA[index].answers.map((el) => {
        if (el.correct) {
            correct = el.value
        }
    })
    let answer = Math.random() < 0.5 ? DATA[index].answers[random(0, 3)].value : correct;
    alert(`Алло, Привет, я думаю вариант ${answer}, но я не уверен`)
    event.target.hidden = true;
}

const helpOfAudience = (index, event) => {
    let answer;
    DATA[index].answers.map((el) => {
        if (el.correct) {
            answer = el.value
        }
    })
    alert(`Зал голосует за вариант ответа: ${answer}`)
    event.target.hidden = true;
}

const fiftyFifty = (index, event) => {
    let wrongIndex = [];
    let elements = document.querySelectorAll(`.answer`);
    for (let i = 0; i < elements.length; i++) {
        if (!JSON.parse(elements[i].getAttribute('data-correct'))) {
            wrongIndex.push(i);
        }
    }
    for (let i = 0; i < 2; i++) {
        elements[wrongIndex[i]].hidden = true;
    }
    event.target.hidden = true;
}

const showAllIcons = () => {
    document.querySelectorAll(`.icons a img`).forEach((el) => {
        el.hidden = false;
    })
}

const end = () => {
    result.innerHTML = `Вы выиграли 1 000 000$`
}
const writeResult = (index) => {
    if (index >= 0 && index < 4) {
        result.innerHTML = `Вы проиграли!!`
        fireproof.innerHTML = `Какакя жалость`
    } else if (index >= 4 && index <= 9) {
        result.innerHTML = `Вы проиграли`
        fireproof.innerHTML = `Но осталась несгораемая сумаа 1 000$!!`
    } else if (index >= 10) {
        result.innerHTML = `Поражение`
        fireproof.innerHTML = `Но вы уходите домой не с пустыми руками у вас остается 32 000$ `

    }
}

const renderQuestions = (index) => {
    questionAndAnswers.dataset.currentStep = index;


    const renderAnswers = () => {
        return DATA[index].answers.map((el) => {
            return (
                `
		<div class="col-6 d-grid gap-2">
		  <button class="btn btn-primary mb-4 answer" type="button" data-correct="${el.correct}">${el.value}</button>
		</div>
            `
            )
        }).join(``)
    }
    questionAndAnswers.innerHTML =
        `
   <div class="row">
        <div class="col text-center mb-4">
        <div class="alert question " role="alert">
            ${DATA[index].question}
        </div>
        </div>
    </div>
        <div class="row answers">
            ${renderAnswers()}
    </div>
    `
};

questionAndAnswers.addEventListener('click', (event) => {
    if (JSON.parse(event.target.getAttribute('data-correct'))) {                                                             // чтоб строка стала логическим false
        const nextQuestionIndex = Number(questionAndAnswers.dataset.currentStep) + 1
        //если закончились вопросы
        if (DATA.length === nextQuestionIndex) {
            end()
            myModal.show()
            renderQuestions(0)
            pointsDisplayRemove()
            pointsDisplayShow(0)
            showAllIcons()
        } else {
            //если ответ верный
            questionAndAnswers.style.pointerEvents='none'                                                               //убираем кликабельность чтоб нельзя выбрать другие варианты
            setTimeout(()=>{
                    event.target.style.backgroundColor = 'green';
            },1000)

            setTimeout(()=>{
                renderQuestions(nextQuestionIndex)
                pointsDisplayShow(nextQuestionIndex)
                writeResult(nextQuestionIndex)
                questionAndAnswers.style.pointerEvents='auto'                                                           //возвращаем кликабельность
            },3000)
        }
    } else {
        //если ответ неверный
        questionAndAnswers.style.pointerEvents='none'
        setTimeout(()=>{
            event.target.style.backgroundColor = 'red';
        },1000)

        setTimeout(()=>{
            writeResult(questionAndAnswers.getAttribute(`data-current-step`))
            myModal.show()
            renderQuestions(0)
            pointsDisplayRemove()
            pointsDisplayShow(0)
            showAllIcons()
            questionAndAnswers.style.pointerEvents='auto'
        },3000)
    }

})
document.querySelectorAll(".icons a").forEach((el) => {
    el.addEventListener('click', (event) => {
        if (el.classList.contains('helpOfAudience')) {
            helpOfAudience(questionAndAnswers.getAttribute(`data-current-step`), event)
        } else if (el.classList.contains('call')) {
            callFriend(questionAndAnswers.getAttribute(`data-current-step`), event)
        } else if (el.classList.contains('50-50')) {
            fiftyFifty(questionAndAnswers.getAttribute(`data-current-step`), event)
        }

    })
})


//questionAndAnswers.addEventListener('click',(e)=>{
//вперед или начало
//const nextQuestionIndex =  Number(questionAndAnswers.dataset.currentStep+1)
//if(e.target.classList.contains('btn-next')){
//  if(DATA.length === nextQuestionIndex){
// end()
// alert("конец")
// }else{
//  renderQuestions(nextQuestionIndex)
//   }
// }
//})
renderQuestions(0);






