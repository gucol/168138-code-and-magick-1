/*
Мои шаги:
создать вспомогательные массивы
создать перебором 4 объекта в массив
привязать объекты к шаблону
показать всё, что скрыто
*/

'use strict';

// Покажите блок .setup, убрав в JS-коде у него класс .hidden.
document.querySelector('.setup').classList.remove('hidden');

/*
Создайте массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать 
похожих персонажей. Объекты должны содержать следующие поля:

name, строка — случайно сгенерированное имя персонажа. 
Имя генерируется из массивов имен и фамилий: нужно случайным образом выбрать 
из массива имен имя, а из массива фамилий фамилию и сложить их. При желании 
имя и фамилию можно в случайном порядке менять местами:)
(Массивы имен и фамилий ниже)

coatColor, строка — случайный цвет мантии на выбор из следующих:

eyesColor, строка — случайный цвет глаз персонажа на выбор из следующих:
black, red blue yellow, green
*/

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

/*
На основе данных, созданных в предыдущем пункте и шаблона 
#similar-wizard-template создайте DOM-элементы, 
соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:

Имя персонажа name запишите как текст в блок .setup-similar-label;
Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat;
Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes.
*/
//место, в которое добавляем похожих персонажей
var similarListElement = document.querySelector('.setup-similar-list');
//шаблон #similar-wizard-template 
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
/*
Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list. 
!!! Для вставки элементов используйте DocumentFragment.
*/
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = names[i] + ' ' + surnames[i];
  wizardElement.querySelector('.wizard-coat').style.fill = coatColors[i];
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColors[i];
  similarListElement.appendChild(wizardElement);
}
/*
Покажите блок .setup-similar, удалив у него CSS-класс hidden.
*/
document.querySelector('.setup-similar').classList.remove('hidden');

/*
Не забыть:
1. Вставить элементы с помощью DocumentFragment в отрисовке элементов в блок .setup-similar-list
*/
