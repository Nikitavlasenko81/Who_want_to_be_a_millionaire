var question = ['Что из этого не является косметическим средством?', 'Кто, в конце концов, скушал Колобка?','Какой шахматной фигуры не существует?'  ,'Что означает буква «О» в аббревиатуре ОРТ?','Главный герой в романе Ф. И. Достоевского «Преступление и наказание»','В состав любого органического вещества входит…','Какое слово здесь лишнее?','Как назывался самый младший гражданский чин, присваивавшийся согласно Табели о рангах?','Кто изобрел громоотвод?','Как в России в 15-17вв. назывались феодально-зависимые люди, не имевшие своего хозяйства, жившие и работавшие во дворах крестьян или посадских людей?','В каком городе находится штаб-квартира Microsoft?','При каком правителе к России была присоединена территория Финляндии?','Ричард Львиное Сердце был пленен во время','Известно, что в кириллице многие буквы имели и цифровое значение. Чему равна буква К (како)?','Кто такой «молотоглав»?'];
var answer = ['Помада','Татуировка','Крем','Пудра',  'Дед','Баба','Заяц','Лиса', 'Пешка','Конь','Король','Дама', 'Олигархическое','Объективное','Общественное','Однообразное', 'Расторгуев','Чикатило','Тумбочкин','Раскольников', 'кислород','углерод','водород','азот', 'Автор','Товар ','Отвар','Ворот', 'Синодский регистратор','Провинциальный секретарь','Коллежский регистратор','Кабинетский регистратор', 'Франклин','Рузвельт','Вашингтон','Линкольн', 'Дворовые','Захребетники','Нахлебники','Бестягольные', 'Нью-Йорк','Ричмонд','Новый Орлеан','Сиэтл', 'Петр I','Екатерина II','Павел I','Александр I', 'крестового похода','столетней войны','войны алой и белой розы','войны за независимость', '10','20','70','90', 'Рыба','Птица','Змея','Насекомое'];
var key = [1, 3, 3,  2, 3, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1];

const DATA = [
    {
        question: 'Что из этого не является косметическим средством?',
        answers:[
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
    {question: 'Кто, в конце концов, скушал Колобка?',
        answers:[
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
    {question: 'Какой шахматной фигуры не существует?',
        answers:[
            {
                id: 5,
                value: `Пешка`,
                correct: false,
            },
            {
                id: 6,
                value: 'Конь',
                correct: true,
            },
            {
                id: 7,
                value: 'Король',
                correct: false,
            },
            {
                id: 8,
                value: 'Дама',
                correct: false,
            },
        ]
    },
    {question: 'Что означает буква «О» в аббревиатуре ОРТ?',
        answers:[
            {
                id: 5,
                value: `Олигархическое`,
                correct: false,
            },
            {
                id: 6,
                value: 'Объективное',
                correct: false,
            },
            {
                id: 7,
                value: 'Общественное',
                correct: true,
            },
            {
                id: 8,
                value: 'Однообразное',
                correct: false,
            },
        ]
    },
    {question: 'Главный герой в романе Ф. И. Достоевского «Преступление и наказание»',
        answers:[
            {
                id: 5,
                value: `Расторгуев`,
                correct: false,
            },
            {
                id: 6,
                value: 'Чикатило',
                correct: false,
            },
            {
                id: 7,
                value: 'Тумбочкин',
                correct: false,
            },
            {
                id: 8,
                value: 'Раскольников',
                correct: true,
            },
        ]
    }
]
const myModal = new bootstrap.Modal(document.querySelector(".myModal"))
const questionAndAnswers = document.querySelector('.questionAndAnswers');
const scoreCounter = document.querySelector('.score_counter')
const point = scoreCounter.querySelectorAll('li')

const pointsDisplayShow = (index = 0)=>{
    point[index].classList.add('active')
    point[index - 1].classList.remove('active')
    if(index === 1){
        scoreCounter.querySelectorAll('li')[index].classList.add('fireproof-amount')
        document.querySelector(".result").innerHTML = `Вы проиграли, осталась несгораеммая сумма 1000$`
    }
}
const pointsDisplayRemove = ()=>{
    for (let i = 0;i < DATA.length;i++){
        scoreCounter.querySelectorAll('li')[i].classList.remove('active')
        scoreCounter.querySelectorAll('li')[i].classList.remove('fireproof-amount')
    }
}
const callFriend = (index)=>{
    let answer;
    DATA[index].answers.map((el)=>{
        if(JSON.parse(el.correct)){
            answer = el.value
        }
    })
    alert(`Ваш друг думает что ваниаент ответа ${answer}`)
}

const end = ()=>{
    document.querySelector(".result").innerHTML = `Вы выиграли 100000$`
}

const renderQuestions = (index) =>{
    questionAndAnswers.dataset.currentStep = index;

    const renderAnswers = () => {
        return DATA[index].answers.map((el)=>{
            return (
                `
		<!--<div class="col-6 answer text-center mb-4 radio-toolbar">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions ${index}" id="inlineRadio1" value="option1 ${el.id}" data-correct="${el.correct}">
                <label class="form-check-label" for="inlineRadio1">${el.value}</label>     
            </div> 
		</div>-->
		
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
        <div class="col question text-center mb-4">
        <div class="alert" role="alert">
            ${DATA[index].question}
        </div>
        </div>
    </div>
        <div class="row answers">
            ${renderAnswers()}
    </div>
    `
};


questionAndAnswers.addEventListener('click',(e)=>{
    if(JSON.parse(e.target.getAttribute('data-correct'))){ // чтоб строка стала логическим false
        console.log("Это правильно")
        const nextQuestionIndex =  Number(questionAndAnswers.dataset.currentStep)+1
            if(DATA.length === nextQuestionIndex){
                 end()
                myModal.show()
                renderQuestions(0)
                pointsDisplayRemove()
            }else{
                renderQuestions(nextQuestionIndex)
                pointsDisplayShow(questionAndAnswers.dataset.currentStep - 1)
        }
    }else{
        console.log("!!!! No")
        myModal.show()
        renderQuestions(0)
        pointsDisplayRemove()
    }

})
document.querySelector(".call").addEventListener('click',(e)=>{
     callFriend(questionAndAnswers.getAttribute(`data-current-step`))


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
renderQuestions(0)






