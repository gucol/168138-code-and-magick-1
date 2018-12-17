'use strict';

// РАСШИРЯЮ ВСТРОЕННУЮ ВАЛИДАЦИЮ:
(function () {
  // Расширяем встроенные возможности валидации форм:
  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');

  /* setCustomValidity — строка, содержащая ошибочное сообщение: https://developer.mozilla.org/ru/docs/Web/API/HTMLSelectElement/setCustomValidity
  Спека validity (ValidityState) и его свойства: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState */
  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      // Сброс, чтобы была возможность показать другие виды ошибок (?)
      userNameInput.setCustomValidity('');
    }
  });

  // Убираем сообщение об ошибке, как только имя перевалило по длине за два знака:
  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });
})();
