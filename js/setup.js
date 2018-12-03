'use strict';

// #12 Учебный проект: нас орда

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
var randomIndexReturn = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Функция, собирающая случайный комплект свойств из объявленных выше массивов:
var madeWizard = function () {
  var wizard = {
    name: randomIndexReturn(names) + ' ' + randomIndexReturn(surnames),
    coatColor: randomIndexReturn(coatColors),
    eyesColor: randomIndexReturn(eyesColors)
  };
  return wizard;
};

// Создание массива из четырёх случайных волшебников:
var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards.push(madeWizard());
}

// Место, в которое добавляем похожих персонажей:
var similarListElement = document.querySelector('.setup-similar-list');

// Находим шаблон #similar-wizard-template
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Отрисовываем сгенерированные DOM-элементы в блок .setup-similar-list. Вставляем элементы, используя DocumentFragment:
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);

// #15 Учебный проект: одеть Надежду

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var OnSetupOpenClick = function() {
  setup.classList.remove('hidden');
}

var OnSetupCloseClick = function() {
  setup.classList.add('hidden');
}

// При нажатии на .setup-open открывается окно .setup (через удаление класса hidden у блока)
setupOpen.addEventListener('click', OnSetupOpenClick);

// При нажатии на .setup-close закрывается .setup (через добавление класса hidden блоку)
setupClose.addEventListener('click', OnSetupCloseClick);




/*
Добавить обработчики для альтернативного ввода с клавиатуры keydown для кнопок открытия/закрытия диалога настройки персонажа:

Когда иконка пользователя в фокусе .setup-open-icon, то окно настройки персонажа должно открываться по нажатию кнопки ENTER
Не забудьте добавить tabindex="0" для иконки пользователя, чтобы она фокусировалась.
*/

/*
Когда окно настройки персонажа открыто, нажатие на клавишу ESC должно закрывать диалог
Если фокус находится на форме ввода имени, то окно закрываться не должно.
*/

/*
Если окно открыто и фокус находится на кнопке закрытия окна, то нажатие клавиши ENTER должно приводить к закрытию диалога
*/

/*
Если диалог открыт, нажатие на кнопку «Сохранить» приводит к отправке формы
*/

/*
Если диалог открыт и фокус находится на кнопке «Сохранить», нажатие на ENTER приводит к отправке формы
*/
