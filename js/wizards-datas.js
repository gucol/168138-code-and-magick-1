'use strict';

// СОЗДАЮ ВОЛШЕБНИКОВ:
(function () {
  var setup = document.querySelector('.setup');

  // Массив цветов для coatColor:
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  // Массив цветов для eyesColor:
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  // Массив имён:
  var NAMES = [
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
  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  setup.classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');

  // Функция, собирающая случайный комплект свойств из объявленных выше массивов:
  var madeWizard = function () {
    var wizard = {
      name: window.util.randomIndexReturn(NAMES) + ' ' + window.util.randomIndexReturn(SURNAMES),
      coatColor: window.util.randomIndexReturn(COAT_COLORS),
      eyesColor: window.util.randomIndexReturn(EYES_COLORS)
    };
    return wizard;
  };

  // Создание массива из четырёх случайных волшебников:
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards.push(madeWizard());
  }

  window.wizardsDatas = wizards;
})();
