'use strict';

// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ:
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    // Функция, возвращающая случайный элемент массива:
    randomIndexReturn: function (array) {
      var randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    },

    /* getMaxElement возвращает наибольший элемент массива.
    Если передать пустой массив в эту функцию, она будет работать неправильно (возвращает undefined).
    Чтобы функция корректно работала с любыми массивами, её нужно видоизменить,
    но пока не понимаю как. */
    getMaxElement: function (array) {
      var maxElement = array[0];

      for (var i = 1; i < array.length; i++) {
        if (array[i] > maxElement) {
          maxElement = array[i];
        }
      }
      return maxElement;
    }
  };
})();
