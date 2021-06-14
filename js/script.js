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
                correct: false,
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
                correct: false,
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
const CATCHWORDS = [`Вы уверены, что это правельный ответ ?`, `Вы уверены, в своем ответе ?`, `Вы так думаете ?`, `Может стоит подумать лучше ?`, `Вы склоняетесь к этому варианту ответа ?`, `Не торопитесь, на кону большие деньги...`, `Вы склоняетесь к этому варианту ответа ?`, `Это ваш конечный ответ ?`,]
//переменные
const myModal = new bootstrap.Modal(document.querySelector(".myModal"))
const questionAndAnswers = document.querySelector('.questionAndAnswers');
const scoreCounter = document.querySelector('.score_counter')
const point = scoreCounter.querySelectorAll('li')
const result = document.querySelector(".result")
const fireproof = document.querySelector(".fireproof")
const field = document.querySelector('.field')

//генератор рандомных чисел
function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

//перемещение выделения суммы
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

//очещение выделений списка сумм
const pointsDisplayRemove = () => {
    for (let i = 0; i < DATA.length; i++) {
        scoreCounter.querySelectorAll('li')[i].classList.remove('active')
        scoreCounter.querySelectorAll('li')[i].classList.remove('fireproof-amount')
    }
}

//показать елемент с подсказкой "звонок другу"
const showCallFriend = (index, event) => {
    field.querySelector(`h3`).hidden = false;
    let correct;
    DATA[index].answers.map((el) => {
        if (el.correct) {
            correct = el.value
        }
    })
    let answer = Math.random() < 0.5 ? DATA[index].answers[random(0, 3)].value : correct;
    field.querySelector('img').hidden = true;
    field.querySelector('h3').innerHTML = `
           Алло, Привет, я думаю вариант " ${answer} ", но я не уверен...
    `
    event.target.hidden = true;
}

//скрыть елемент с подсказкой "звонок другу"
const callFriendHide = () => {
    field.querySelector(`h3`).hidden = true;
    field.querySelector(`img`).hidden = false;
}

//показать елемент с подсказкой "Помощь зала"
const showHelpOfAudience = (index, event) => {

    const ratingElementCreate = (percent, value) => {
        let rating = document.createElement('div')
        rating.classList.add('progress-container', 'mb-4')
        rating.innerHTML = `
                            <h3>${value}</h3>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: ${percent}%" aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            `
        return rating
    }

    DATA[index].answers.map((el) => {
        if (el.correct) {
            field.append(ratingElementCreate(90, el.value))
        } else {
            field.append(ratingElementCreate(random(0, 80), el.value))
        }
    })
    field.querySelector('img').hidden = true;
    event.target.hidden = true;
}

//скрыть елемент с подсказкой "Помощь зала"
const helpOfAudienceHide = () => {
    document.querySelectorAll(`.progress-container`).forEach((el) => {
        el.hidden = true;
    })
    document.querySelector(`.field img`).hidden = false;
}

//убрать два варианта ответа
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

//показать все иконки помощников
const showAllIcons = () => {
    document.querySelectorAll(`.icons a img`).forEach((el) => {
        el.hidden = false;
    })
}

//подсветить правельный вариант ответа
const showCorrectAnswer = () => {
    document.querySelectorAll(`.answer`).forEach((element) => {
        if (JSON.parse(element.getAttribute('data-correct'))) {
            element.style.backgroundColor = 'green';
        }
    })
}

//подсветить неправельный вариант ответа
const showWrongAnswer = (event) => {
    event.target.style.backgroundColor = 'red';
}

//записать несгораемые суммы
const writeResult = (index) => {
    if (index >= 0 && index < 4) {
        result.innerHTML = `Вы проиграли!!`
        fireproof.innerHTML = `Какакя жалость`
    } else if (index >= 4 && index <= 9) {
        result.innerHTML = `Вы проиграли`
        fireproof.innerHTML = `Но осталась несгораемая сумаа 1 000$!!`
    } else if (index >= 10 && index <= 14) {
        result.innerHTML = `Поражение`
        fireproof.innerHTML = `Но вы уходите домой не с пустыми руками у вас остается 32 000$ `
    } else {
        result.innerHTML = `Ура вы самый умный!!!`
        fireproof.innerHTML = `Вы выиграли 1 000 000$`
    }
}

//вызов confirm с вероятностью
const randConfirm = () => {
    let result = true
    if (Math.random() < 0.4) {
        result = confirm(CATCHWORDS[random(0, CATCHWORDS.length)])
    }
    return result
}

//сгенерировать вопрос
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
   <div class="row" >
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

//событие нажатия на вариант ответа
questionAndAnswers.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (randConfirm()) {                                                                                            // вопрос ведущего с вероятностью 60%
            if (JSON.parse(event.target.getAttribute('data-correct'))) {                                                // чтоб строка стала логическим false
                const nextQuestionIndex = Number(questionAndAnswers.dataset.currentStep) + 1
                callFriendHide()                                                                                        // спрятать помошники
                helpOfAudienceHide();

                //если закончились вопросы
                if (DATA.length === nextQuestionIndex) {
                    writeResult(nextQuestionIndex)
                    myModal.show()
                    renderQuestions(0)
                    pointsDisplayRemove()
                    pointsDisplayShow(0)
                    showAllIcons()
                } else {

                    //если ответ верный
                    questionAndAnswers.style.pointerEvents = 'none'                                                     //убираем кликабельность чтоб нельзя выбрать другие варианты
                    setTimeout(() => {
                        showCorrectAnswer()                                                                             //вывод правельного ответа
                    }, 1000)

                    setTimeout(() => {
                        renderQuestions(nextQuestionIndex)                                                              //следующий вопрос, переместить сумму, записать балы
                        pointsDisplayShow(nextQuestionIndex)
                        writeResult(nextQuestionIndex)
                        questionAndAnswers.style.pointerEvents = 'auto'                                                 //возвращаем кликабельность
                    }, 3000)
                }
            } else {

                //если ответ неверный
                questionAndAnswers.style.pointerEvents = 'none'
                setTimeout(() => {
                    showWrongAnswer(event)
                    showCorrectAnswer()
                }, 1000)

                setTimeout(() => {
                    writeResult(questionAndAnswers.getAttribute(`data-current-step`))
                    myModal.show()
                    renderQuestions(0)
                    pointsDisplayRemove()
                    pointsDisplayShow(0)
                    showAllIcons()
                    callFriendHide()
                    helpOfAudienceHide()
                    questionAndAnswers.style.pointerEvents = 'auto'
                }, 3000)
            }
        }
    }
})

//добавление на иконки помощников события
document.querySelectorAll(".icons a").forEach((el) => {
    el.addEventListener('click', (event) => {
        if (el.classList.contains('helpOfAudience')) {
            showHelpOfAudience(questionAndAnswers.getAttribute(`data-current-step`), event);
        } else if (el.classList.contains('call')) {
            showCallFriend(questionAndAnswers.getAttribute(`data-current-step`), event)
        } else if (el.classList.contains('50-50')) {
            fiftyFifty(questionAndAnswers.getAttribute(`data-current-step`), event)
        }

    })
})

//рестарт и доп. меню
document.querySelector('.restart').addEventListener('click', (e) => {
    e.preventDefault();
    renderQuestions(0)
    pointsDisplayRemove()
    pointsDisplayShow(0)
    showAllIcons()
})

document.querySelector('.restart').addEventListener('dblclick', (e) => {
    e.preventDefault();
    let createLevelForm = () => {
        let form = document.createElement('form')
        form.classList.add('enter-level')
        form.innerHTML = `
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Введите номер вопроса к которому перейти</label>
    <input type="number" class="form-control" id="exampleInputEmail1">
    <div id="emailHelp" class="form-text">Вы нашли тайное меню, теперь вы можете выбирать вопрос к которому хотите перейти</div>
    <button type="button" class="btn btn-primary">Перейти</button>
  </div>
    `
        return form
    }                                                                                      //создание элемента для ввода уровня
    field.append(createLevelForm())
    field.querySelector('img').hidden = true;
    const levelForm = document.querySelector('.enter-level');
    levelForm.addEventListener('click', (e) => {
        let level = levelForm.querySelector('input').value;
        if (level > 0 && level <= 15) {
            pointsDisplayRemove()
            renderQuestions(level - 1);
            levelForm.hidden = true;
            field.querySelector('img').hidden = false;
        }
    })
})
renderQuestions(0);






