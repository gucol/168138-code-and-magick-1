'use strict';

// Модуль для работы с диалогом:
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var form = setup.querySelector('.setup-wizard-form');

  // Закрытие окна настройки персонажа при клике на ESC:
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  // Функция закрытия попапа:
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setup.style.top = 80 + 'px';
    setup.style.left = 50 + '%';
  };

  // Функция открытия попапа:
  var openPopup = function () {
    setup.classList.remove('hidden');

    // Обработчик закрытия окна по ESC стоит добавлять только тогда, когда окно появляется на странице.
    document.addEventListener('keydown', function (evt) {
      window.util.isEscEvent(evt, closePopup);
    });
  };

  var removeError = function () {
    if (document.querySelector('.error')) {
      document.querySelector('.error').remove();
    }
  };

  var onSuccessSubmit = function () {
    closePopup();
    removeError();
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onSuccessSubmit, window.backend.onError);
    evt.preventDefault();
  });

  // При нажатии на .setup-open открывается окно .setup (через удаление класса hidden у блока):
  setupOpen.addEventListener('click', openPopup);

  // Нажатие на Enter на .setup-open также открывает попап:
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  // При нажатии на .setup-close закрывается .setup (через добавление класса hidden блоку):
  setupClose.addEventListener('click', closePopup);

  // При нажатии на Enter на .setup-close окно тоже закрывается:
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });
})();
