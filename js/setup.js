'use strict';

// Показываем блок .setup
document.querySelector('.setup').classList.remove('hidden');
// Показывам блок .setup-similar
document.querySelector('.setup-similar').classList.remove('hidden');

// Массив цветов для coatColor:
var coatColors = [
'rgb(101, 137, 164)',
'rgb(241, 43, 107)',
'rgb(146, 100, 161)',
'rgb(56, 159, 117)',
'rgb(215, 210, 55)',
'rgb(0, 0, 0)'
];

// Массив цветов для eyesColor:
var eyesColors = [
'black',
'red',
'blue',
'yellow',
'green'
];

// Массив имён:
var names = [
'Иван',
'Хуан Себастьян',
'Мария',
'Кристоф',
'Виктор',
'Юлия',
'Люпита',
'Вашингтон'
];

// Массив фамилий:
var surnames = [
'да Марья',
'Верон',
'Мирабелла',
'Вальц',
'Онопко',
'Топольницкая',
'Нионго',
'Ирвинг'
];

// Функция, возвращающая случайный элемент массива:
var randomIndexReturn = function(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

// Функция, собирающая случайный комплект свойств из объявленных выше массивов:
var madeWizard = function () {
	var wizard = {
		name: randomIndexReturn(names) + ' ' + randomIndexReturn(surnames),
		coatColor: randomIndexReturn(coatColors),
		eyesColor: randomIndexReturn(eyesColors)
	}
	return wizard;
}

// Создание массива из четырёх случайных волшебников:
var wizards = [];

for (var i = 0; i < 4; i++) {
	wizards.push(madeWizard());
}

// Место, в которое добавляем похожих персонажей:
var similarListElement = document.querySelector('.setup-similar-list');

// Находим шаблон #similar-wizard-template 
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Отрисовываем сгенерированные DOM-элементы в блок .setup-similar-list. Для вставляем элементы используйте DocumentFragment.
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  similarListElement.appendChild(wizardElement);
}

