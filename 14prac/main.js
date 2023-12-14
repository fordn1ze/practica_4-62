// let table = document.querySelector('#table');
// fillTable(table, 10, 10);
// let compCellNum = getCompCellNum(10, 0, 99);
// console.log(compCellNum);

// let tds = document.querySelectorAll('#table td');


// for (let i = 0; i < tds.length; i++) {
//     tds[i].textContent = i;

//     tds[i].addEventListener('click', function func() {
//         if (compCellNum.includes(i)) {
//             this.classList.add('green');
//         } else {
//             this.classList.add('red');
//         }

//         this.removeEventListener('click', func)
//     });
// }

// function getCompCellNum(count, min, max) {
//     return shuffle(createIntArray(min, max)) . slice(0, count);
// }

// function createIntArray(min, max) {
//     let res = [];

//     for (let i = min; i <= max; i++) {
//         res.push(i);
//     }

//     return res;
// }

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min
//         + 1)) + min;
// }

// function shuffle(arr) {
//     let res = [];

//     while (arr.length > 0) {
//         let random = getRandomInt(0, arr.length - 1);
//         let elem = arr.splice(random, 1)[0];
//         res.push(elem);
//     }

//     return res;
// }


// function fillTable(table, rows, cols) {
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');

//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td');
//             tr.append(td);
//         }

//         table.append(tr);
//     }
// }

//Игра угадай ячейку (с таймером)

// let table = document.querySelector('#table');
// fillTable(table, 10, 10);
// let compCellNum = getCompCellNum(10, 0, 99);
// console.log(compCellNum);

// let tds = document.querySelectorAll('#table td');

// // Устанавливаем время в секундах
// let countdown = 60;

// // Функция для обновления таймера и проверки окончания времени
// function updateTimer() {
//     console.log(`Осталось времени: ${countdown} сек.`);
//     countdown--;

//     if (countdown < 0) {
//         console.log('Время вышло. Вы проиграли.');
//         removeClickListeners();
//     } else {
//         setTimeout(updateTimer, 1000);
//     }
// }

// // Запускаем таймер
// updateTimer();

// for (let i = 0; i < tds.length; i++) {
//     tds[i].textContent = i;

//     tds[i].addEventListener('click', function func() {
//         if (compCellNum.includes(i)) {
//             this.classList.add('green');
//         } else {
//             this.classList.add('red');
//         }

//         this.removeEventListener('click', func);
//         checkWin();
//     });
// }

// function checkWin() {
//     if (document.querySelectorAll('.green').length === compCellNum.length) {
//         console.log('Поздравляем! Вы выиграли.');
//         removeClickListeners();
//     }
// }

// function removeClickListeners() {
//     for (let i = 0; i < tds.length; i++) {
//         tds[i].removeEventListener('click', tds[i].func);
//     }
// }

// function getCompCellNum(count, min, max) {
//     return shuffle(createIntArray(min, max)).slice(0, count);
// }

// function createIntArray(min, max) {
//     let res = [];

//     for (let i = min; i <= max; i++) {
//         res.push(i);
//     }

//     return res;
// }

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function shuffle(arr) {
//     let res = [];

//     while (arr.length > 0) {
//         let random = getRandomInt(0, arr.length - 1);
//         let elem = arr.splice(random, 1)[0];
//         res.push(elem);
//     }

//     return res;
// }

// function fillTable(table, rows, cols) {
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');

//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td');
//             tr.append(td);
//         }

//         table.append(tr);
//     }
// }

//Экранная клавиатура

// let letters = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
// let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// let inputField = document.querySelector('#n5 #inputField');
// let keyboard = document.querySelector('#n5');
// let caps = document.createElement('span');
// caps.classList.add('btn', 'caps');
// caps.textContent = 'caps';

// keyboard.appendChild(caps);

// for (let letter of letters) {
//     let btn = document.createElement('span');
//     btn.classList.add('btn', 'letter');
//     btn.textContent = letter;
//     keyboard.appendChild(btn);
// }

// for (let number of numbers) {
//     let btn = document.createElement('span');
//     btn.classList.add('btn', 'num');
//     btn.textContent = number;
//     keyboard.appendChild(btn);
// }

// let btns = document.querySelectorAll('#n5 .btn');
// let isLower = true;

// for (let btn of btns) {
//     btn.addEventListener('click', function () {
//         if (btn.classList.contains("caps")) {
//             inputField.value += "";
//         } else {
//             inputField.value += btn.textContent;
//         }
//     });
// }

// caps.addEventListener('click', function () {
//     for (let btn of btns) {
//         if (isLower) {
//             btn.textContent = btn.textContent.toUpperCase();
//         } else {
//             btn.textContent = btn.textContent.toLowerCase();
//         }
//     }
//     isLower = !isLower;
// });

//Линейный календарь

// let currentMonthOffset = 0;
// let calendarList;
// let calendar = document.querySelector('#n6')

// function generateLinearCalendar() {
//     let currentDate = new Date();
//     currentDate.setMonth(currentDate.getMonth() + currentMonthOffset);
//     let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
//     let currentMonth = months[currentDate.getMonth()];
//     let currentYear = currentDate.getFullYear();
//     let currentDay = currentDate.getDate();
//     let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

//     document.querySelector('#calendar-header').textContent = `${currentMonth} ${currentYear}`;

//     if (calendarList) {
//         calendar.removeChild(calendarList);
//     }

//     calendarList = document.createElement('ul');

//     for (let day = 1; day <= daysInMonth; day++) {
//         let listItem = document.createElement('li');
//         listItem.textContent = day;
//         listItem.classList.toggle('current-day', day === currentDay);

//         calendarList.appendChild(listItem);
//     }

//     calendar.appendChild(calendarList);
// }

// function changeMonth(offset) {
//     currentMonthOffset += offset;
//     generateLinearCalendar();
// }

// generateLinearCalendar();

//Поиск тегов

// let tagDescriptions = {
//     'a': 'Тег <a> предназначен для создания ссылок.',
//     'p': 'Тег <p> предназначен для разделения текста на абзацы.',
//     'h1': 'Тег <h1> представляет собой наиболее важный заголовок первого уровня.',
// };

// let inputElement = document.querySelector('#n7 #tagInput');
// let outputElement = document.querySelector('#n7 #tagDescription');

// inputElement.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         let tagName = inputElement.value.toLowerCase();
//         let description = tagDescriptions[tagName];

//         if (description) {
//             outputElement.textContent = description;
//         }
		
// 		else {
//             outputElement.textContent = 'Описание не найдено для данного тега.';
//         }
//     }
// });

//Поиск исторических событий

// let historicalEvents = [
//     {
//         date: '2000-01-01',
//         title: 'Начало нового тысячелетия',
//         description: '1 января 2000 года отмечено начало нового тысячелетия.'
//     },
//     {
//         date: '2001-09-11',
//         title: 'Теракты 11 сентября',
//         description: '11 сентября 2001 года произошли теракты в США.'
//     },
//     {
//         date: '2002-01-01',
//         title: 'Введение евро',
//         description: '1 января 2002 года в 12 странах Европы введена единая валюта — евро.'
//     },
// ];

// function displayEvents(year) {
//     let filteredEvents = historicalEvents.filter(event => event.date.startsWith(year));
//     let table1 = document.querySelector('#n8 #table1');

//     table1.innerHTML = '';

//     if (filteredEvents.length === 0) {
//         table1.textContent = 'Нет событий для выбранного года';
//     } else {
//         let header = table1.createTHead().insertRow();
//         let headers = ['Дата', 'Название', 'Описание'];

//         for (let headerText of headers) {
//             header.insertCell().textContent = headerText;
//         }

//         for (let event of filteredEvents) {
//             let row = table1.insertRow();

//             for (let prop of ['date', 'title', 'description']) {
//                 row.insertCell().textContent = event[prop];
//             }
//         }
//     }
// }

// function handleKeyDown(event) {
//     if (event.key === 'Enter') {
//         displayEvents(document.querySelector('#n8 #input').value);
//     }
// }

// document.querySelector('#n8 #input').addEventListener('keydown', handleKeyDown);

//Гороскоп

// let horoscopes = {
//   'Овен': {
//     today: 'Сегодня вы на верном пути к новым начинаниям и у вас открываются удачные перспективы.',
//     tomorrow: 'Завтра могут возникнуть неожиданные ситуации, будьте готовы адаптироваться к переменам.',
//     dayAfterTomorrow: 'Послезавтра важно уделить внимание своим близким и поддерживающим вас отношениям.'
//   },
//   'Телец': {
//     today: 'Сегодня благоприятный момент для творчества и самовыражения. Разгуляйте свою фантазию!',
//     tomorrow: 'Завтра лучше избегать конфликтов, сохраняйте спокойствие и уделяйте внимание себе.',
//     dayAfterTomorrow: 'Послезавтра открываются перспективы для полезных знакомств и новых связей.'
//   },
//   'Близнецы': {
//     today: 'Сегодня благоприятный день для общения и обмена идеями. Вы легко находите общий язык.',
//     tomorrow: 'Завтра будьте внимательны к мелочам, избегайте недоразумений и межличностных конфликтов.',
//     dayAfterTomorrow: 'Послезавтра отличное время для обучения новому и расширения своих знаний.'
//   },
//   'Рак': {
//     today: 'Сегодня вы можете почувствовать теплую поддержку семьи. Обратите внимание на близких.',
//     tomorrow: 'Завтра избегайте конфликтов, уделите внимание близким и поддерживающим отношениям.',
//     dayAfterTomorrow: 'Послезавтра подходит для заботы о домашних делах и уюта в доме.'
//   },
//   'Лев': {
//     today: 'Сегодня отличное время для проявления лидерских качеств и достижения высоких результатов.',
//     tomorrow: 'Завтра будьте внимательны к мнению окружающих, проявите такт и дипломатию.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для творческих начинаний и самореализации.'
//   },
//   'Дева': {
//     today: 'Сегодня фокусируйтесь на деталях и порядке. Организуйте свои дела для успешных результатов.',
//     tomorrow: 'Завтра планируйте ваши задачи, будьте организованными и систематичными.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для заботы о здоровье. Внимательно следите за собой.'
//   },
//   'Весы': {
//     today: 'Сегодня старайтесь найти баланс в отношениях. Проявите дипломатию и понимание.',
//     tomorrow: 'Завтра будьте открыты для компромиссов и сотрудничества. Решения будут приносить пользу.',
//     dayAfterTomorrow: 'Послезавтра подходит для общения, обмена идеями и укрепления социальных связей.'
//   },
//   'Скорпион': {
//     today: 'Сегодня будьте осторожны в выражении своих чувств. Сохраняйте баланс между страстью и разумом.',
//     tomorrow: 'Завтра фокусируйтесь на своих целях и стремлениях. Будьте решительны в достижении успеха.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для планов и амбиций. Задумайтесь о своем будущем.'
//   },
//   'Стрелец': {
//     today: 'Сегодня будьте открыты для новых идей и приключений. Экспериментируйте и рискуйте!',
//     tomorrow: 'Завтра стремитесь к знаниям и саморазвитию. Обучение приносит ценный опыт.',
//     dayAfterTomorrow: 'Послезавтра подходит для обучения новому. Развивайтесь и расширяйте горизонты.'
//   },
//   'Козерог': {
//     today: 'Сегодня фокусируйтесь на достижении своих целей. Ваши усилия приведут к успеху.',
//     tomorrow: 'Завтра будьте осторожны в финансовых вопросах. Планируйте свои расходы.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для планов на будущее. Задумайтесь о долгосрочных перспективах.'
//   },
//   'Водолей': {
//     today: 'Сегодня будьте открыты для общения и социальных связей. Укрепляйте свои социальные связи.',
//     tomorrow: 'Завтра старайтесь быть оригинальными и творческими. Ваша уникальность - ваше преимущество.',
//     dayAfterTomorrow: 'Послезавтра подходит для работы в коллективе. Сотрудничество принесет плоды.'
//   },
//   'Рыбы': {
//     today: 'Сегодня слушайте свои внутренние чувства и интуицию. Ваш внутренний компас указывает верное направление.',
//     tomorrow: 'Завтра уделите внимание своим эмоциональным потребностям. Позаботьтесь о себе.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для творчества и самовыражения. Разгуляйте свою фантазию.'
//   }
// };
// function showHoroscope(event) {
//   if (event.key === 'Enter') {
//     let birthdateInput = document.getElementById('birthdateInput');
//     let selectedDay = document.querySelector('input[name="day"]:checked').value;

//     let zodiacSigns = [
//       'Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева',
//       'Весы', 'Скорпион', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы'
//     ];
//     let birthDate = new Date(birthdateInput.value);
//     let zodiacIndex = (birthDate.getMonth() + 1) % 12;
//     let zodiacSign = zodiacSigns[zodiacIndex];

//     let horoscopeOutput = document.getElementById('horoscopeOutput');
//     horoscopeOutput.textContent = horoscopes[zodiacSign][selectedDay];
//   }
// }

// document.querySelectorAll('input[name="day"]').forEach(function (radio) {
//   radio.addEventListener('change', showHoroscope);
// });

//Сайт предсказаний

// let predictions = [
// 	{ 
// 		text: 'Сегодня будет отличный день!', 
// 		type: 'good' 
// 	},
// 	{ 
// 		text: 'Ожидайте неожиданностей...', 
// 		type: 'bad' 
// 	},
// 	{ 
// 		text: 'Удача сегодня на вашей стороне!', 
// 		type: 'good' 
// 	},
// 	{ 
// 		text: 'Будьте осторожны во всех начинаниях.', 
// 		type: 'bad' 
// 	},
// ];

// let timerInterval;

// function startTimer() {
// 	let timer = document.querySelector('#timer');
// 	let startButton = document.querySelector('#start');
// 	let stopButton = document.querySelector('#stop');

// 	startButton.classList.remove('active');
// 	stopButton.classList.add('active');

// 	timerInterval = setInterval(function () {
// 		timer.textContent = getRandomNumber(1, 10);
// 	}, 100);
// }

// function stopTimer() {
// 	clearInterval(timerInterval);

// 	let timer = document.querySelector('#timer');
// 	let stopButton = document.querySelector('#stop');
// 	let textDiv = document.querySelector('#text');

// 	stopButton.classList.remove('active');

// 	let predictionNumber = parseInt(timer.textContent);
// 	let prediction = predictions[predictionNumber % predictions.length];

// 	textDiv.textContent = prediction.text;

// 	if (prediction.type === 'good') {
// 		textDiv.classList.add('good-prediction');
// 	} 
	
// 	else {
// 		textDiv.classList.add('bad-prediction');
// 	}
// }

// function getRandomNumber(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//Игра в города

// let field = document.querySelector('#n15 #field22');
// let message = document.querySelector('#n15 #message22');
// let cities = [];
// let currentPlayer = 1; 
// let allCities = [
//     'Москва', 'Анапа', 'Абакан', 'Новосибирск', 'Омск', 'Екатеринбург', 
//   'Санкт-Петербург', 'Краснодар', 'Казань', 'Сочи', 'Хабаровск', 
//   'Владивосток', 'Томск', 'Уфа', 'Иркутск', 'Ярославль', 'Тверь', 
//   'Волгоград', 'Ростов-на-Дону', 'Калининград', 'Астрахань', 'Саратов'
// ];

// field.addEventListener('keydown', handleKeyDown);

// function handleKeyDown(event) {
// 	if (event.key === "Enter") {
//     	event.preventDefault();
//     	let cityName = field.value.trim();

//     	if (isValidCity(cityName)) {
//     		if (isValidMove(cityName)) {
//     			cities.push(cityName);
//     			displayMessage(`Игрок ${currentPlayer}: "${cityName}" добавлен. Следующий ход.`);
//     			field.value = "";
//     			currentPlayer = (currentPlayer % 3) + 1;
//     			makeMove();
//     		} 

// 			else {
//     			displayMessage("Неправильный ход. Город должен начинаться с последней буквы предыдущего города.");
//     		}
//     	} 

// 		else {
//     		displayMessage("Город должен начинаться с буквы.");
//     	}
// 	}
// }

// function isValidCity(city) {
// 	return city.length > 0 && isNaN(city[0]);
// }

// function isValidMove(city) {
// 	if (cities.length === 0) {		
// 		return true; 
// 	}

// 	let lastCity = cities[cities.length - 1];
// 	let lastLetter = lastCity.slice(-1).toUpperCase();

// 	if (lastCity.endsWith("ь")) {
//   		lastLetter = lastCity[lastCity.length - 2].toUpperCase();
//   	}
// 	return city.toUpperCase().startsWith(lastLetter);
// }

// function makeMove() {
// 	switch (currentPlayer) {
//     	case 1:
//       	break;

//     	case 2:
//     	break;

// 		case 3:
//       	makeRobotMove();
//       	break;
// 	}
// }

// function makeRobotMove() {
// 	let lastCity = cities[cities.length - 1];
// 	let lastLetter = lastCity.slice(-1).toUpperCase();

// 	if (lastCity.endsWith("ь")) {
// 		lastLetter = lastCity[lastCity.length - 2].toUpperCase();
// 	}

// 	let availableCities = allCities.filter(city => !cities.includes(city) && city.toUpperCase().startsWith(lastLetter));

// 	if (availableCities.length > 0) {
// 		let robotCity = availableCities[Math.floor(Math.random() * availableCities.length)];
// 		cities.push(robotCity);
// 		displayMessage(`Робот: "${robotCity}". Следующий ход.`);
// 		currentPlayer = 1; 
// 	} 

//   	else {
//   		displayMessage("Победа! Робот не может найти подходящий город. Вы выиграли!");
//   	}
// }

// function displayMessage(text) {
// 	message.textContent = text;
// }

//Чеклист

// let input = document.querySelector('#n18 #input');
// let list = document.querySelector('#n18 #list');

// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
		
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
// 		task.addEventListener('dblclick', function() {
// 			let text = this.textContent;
// 			this.textContent = '';
			
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);
			
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.textContent = this.value;
// 				}
// 			});
// 		});

// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.textContent = 'удалить';
// 		remove.classList.add('remove');

// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});

// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.textContent = 'сделано';
// 		mark.classList.add('mark');

// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});

// 		li.appendChild(mark);
// 		list.appendChild(li);
// 		this.value = '';
// 	}
// });

//Тесты

let testContainer = document.querySelector('#n30 #test');
let checkButton = document.querySelector('#n30 #button');

let questions = [
  {
    text: 'вопрос 1?',
    right: 0,
    variants: ['вариант 1', 'вариант 2', 'вариант 3'],
  },
  {
    text: 'вопрос 2?',
    right: 1,
    variants: ['вариант 1', 'вариант 2', 'вариант 3'],
  },
  {
    text: 'вопрос 3?',
    right: 2,
    variants: ['вариант 1', 'вариант 2', 'вариант 3'],
  },
];

questions.forEach((question, index) => {
	let questionDiv = document.createElement('div');
	questionDiv.innerHTML = `<p>${question.text}</p>`;

	question.variants.forEach((variant, id) => {
    	let label = document.createElement('label');
    	label.innerHTML = `
      	<input type="radio" name="${index}" data-id="${id}">
      	${variant}
    	`;

    	questionDiv.appendChild(label);
  	});
  	testContainer.appendChild(questionDiv);
});

checkButton.addEventListener('click', checkAnswers);

function checkAnswers() {
	questions.forEach((question, index) => {
    	let questionDiv = testContainer.children[index];
    	let radioButtons = questionDiv.querySelectorAll('input[type="radio"]');
    	let userAnswer = Array.from(radioButtons).find((radio) => radio.checked);

    		if (userAnswer) {
      		if (parseInt(userAnswer.getAttribute('data-id')) === question.right) {
      		  userAnswer.parentElement.classList.add('right');
      		  userAnswer.parentElement.classList.remove('wrong');
      		} else {
      		  userAnswer.parentElement.classList.add('wrong');
      		  userAnswer.parentElement.classList.remove('right');
      		}
    	}
	});
}

//Игра крестики-нолики

// let cells = document.querySelectorAll('#field td');
// start(cells);

// function start(cells) {
// 	let i = 0;

// 	for (let cell of cells) {
//     	cell.addEventListener('click', function step() {
//       		this.textContent = ['X', 'O'][i % 2];
//       		this.removeEventListener('click', step);

//       		if (isVictory(cells)) {
//       			alert(this.textContent + ' победил!');
//       		} 
	  
// 	  		else if (i == cells.length - 1) {
//       			alert('ничья(');
//       		}
//       		i++;
// 		});
// 	}
// }

// function isVictory(cells) {
// let combs = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

// for (let comb of combs) {
//     if (
//     	cells[comb[0]].textContent == cells[comb[1]].textContent &&
//     	cells[comb[1]].textContent == cells[comb[2]].textContent &&
//     	cells[comb[0]].textContent != ''
//     ) {
//     	return true;
//     }
// }
// 	return false;
// }

//Игра смена цветов

// let rows = 3;
// let cols = 3;
// let colors = ['red', 'green', 'blue'];
// let isGameWon = false;
// let moveCount = 0;
// let gameField = document.querySelector('#n47 #field');
// let movesElement = document.querySelector('#n47 #moves');

// function getNextItem(array, currentItem) {
// 	let currentIndex = array.indexOf(currentItem);
// 	let nextIndex = (currentIndex + 1) % array.length;
// 	return array[nextIndex];
// }

// function changeColor(cell) {
//   	if (isGameWon) {
//   	  return;
//   	}

// 	let currentColor = getCellColor(cell);
// 	let nextColor = getNextItem(colors, currentColor);
// 	cell.classList.remove(...colors);
// 	cell.classList.add(nextColor);
// 	checkWin();
// 	moveCount++;
// 	movesElement.textContent = `Ходов: ${moveCount}`;
// }

// function checkWin() {
// 	let allCells = document.querySelectorAll('#n47 #field td');
// 	let firstCellColor = getCellColor(allCells[0]);
// 	let isWin = Array.from(allCells).every(cell => getCellColor(cell) === firstCellColor);

//   	if (isWin) {
//   		isGameWon = true;
//   		allCells.forEach(cell => cell.classList.add('win'));
//   		alert(`Поздравляем! Вы выиграли за ${moveCount} ходов!`);
//   	}
// }

// function getCellColor(cell) {
// 	 return Array.from(cell.classList).find(className => colors.includes(className)) || '';
// }

// for (let i = 0; i < rows; i++) {
// 	let row = gameField.insertRow(i);
// 	for (let j = 0; j < cols; j++) {
// 		let cell = row.insertCell(j);
// 		let randomColor = getRandomItem(colors);
// 		cell.classList.add(randomColor);
// 		cell.addEventListener('click', () => changeColor(cell));
// 	}
// }

// function getRandomItem(array) {
// 	return array[Math.floor(Math.random() * array.length)];
// }

//Календарь

let calendar2 = document.querySelector('#n52 #calendar');
let body = calendar2.querySelector('#n52 .body');
let prev = calendar2.querySelector('#n52 .prev');
let next = calendar2.querySelector('#n52 .next');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

draw(body, year, month);
updateInfo();

next.addEventListener('click', function (event) {
	event.preventDefault();
	year = getNextYear(year, month);
	month = getNextMonth(month);
	draw(body, year, month);
	updateInfo();
});

prev.addEventListener('click', function (event) {
	event.preventDefault();
	year = getPrevYear(year, month);
	month = getPrevMonth(month);
	draw(body, year, month);
	updateInfo();
});

function draw(body, year, month) {
	let arr = range(getLastDay(year, month));

	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay = getLastWeekDay(year, month);

	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums);
}

function createTable(parent, arr) {
	parent.textContent = '';
	let cells = [];

	for (let sub of arr) {
		let tr = document.createElement('tr');

		for (let num of sub) {
			let td = document.createElement('td');
			td.textContent = num;
			tr.appendChild(td);

			cells.push(td);
		}

		parent.appendChild(tr);
	}

	return cells;
}

function normalize(arr, left, right) {
	for (let i = 0; i < left; i++) {
		arr.unshift('');
	}
	for (var i = 0; i < right; i++) {
		arr.push('');
	}

	return arr;
}

function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 1);
	let num = date.getDay();

	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}

function getLastWeekDay(year, month) {
	let date = new Date(year, month + 1, 0);
	let num = date.getDay();

	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}

function getLastDay(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}

function range(count) {
	let arr = [];

	for (let i = 1; i <= count; i++) {
		arr.push(i);
	}

	return arr;
}

function chunk(arr, n) {
	let result = [];
	let count = Math.ceil(arr.length / n);

	for (let i = 0; i < count; i++) {
		let elems = arr.splice(0, n);
		result.push(elems);
	}

	return result;
}

function getNextYear(year, month) {
	return month === 11 ? year + 1 : year;
}

function getNextMonth(month) {
	return month === 11 ? 0 : month + 1;
}

function getPrevYear(year, month) {
	return month === 0 ? year - 1 : year;
}

function getPrevMonth(month) {
	return month === 0 ? 11 : month - 1;
}

function updateInfo() {
	let monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
	let infoElement = document.querySelector('#n52 .info');
	infoElement.textContent = `${monthNames[month]} ${year}`;
}