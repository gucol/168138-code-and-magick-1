'use strict';
// ИЗМЕНЕНИЕ НАСТРОЕК ПЕРСОНАЖА ПО КЛИКУ:
(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  // Массив цветов для фаерболов:
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

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

  /* Для того, чтобы на сервер отправились правильные данные, при изменении параметров персонажа должно
  изменяться и значение соответствующего скрытого инпута. */
  var changeCoatColor = function () {
    var newCoatColor = window.util.randomIndexReturn(COAT_COLORS);
    wizardCoat.style.fill = newCoatColor;
    document.querySelector('input[name="coat-color"]').value = newCoatColor;
  };

  var changeEyesColor = function () {
    var newEyesColor = window.util.randomIndexReturn(EYES_COLORS);
    wizardEyes.style.fill = newEyesColor;
    document.querySelector('input[name="eyes-color"]').value = newEyesColor;
  };

  var changeFireballColor = function () {
    var newFireBallColor = window.util.randomIndexReturn(FIREBALL_COLORS);
    wizardFireball.style.background = newFireBallColor;
    document.querySelector('input[name="fireball-color"]').value = newFireBallColor;
  };

  // Изменение цвета мантии персонажа по нажатию.
  wizardCoat.addEventListener('click', changeCoatColor);
  // Изменение цвета глаз персонажа по нажатию.
  wizardEyes.addEventListener('click', changeEyesColor);
  // Изменение цвета фаерболов по нажатию.
  wizardFireball.addEventListener('click', changeFireballColor);
})();
