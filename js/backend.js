'use strict';

(function () {
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';
  var SUCCESS_STATUS = 200;

  /*
  save — отправлять данные игрока на сервер, обрабатывать ошибки и
  скрывать форму редактирования персонажа, если ошибок не произошло.
  */
  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Возникла непредвиденная ошибка');
    });

    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  /*
  load — получать с сервера данные с помощью объекта XMLHttpRequest
  или с помощью JSONP, обрабатывать полученные запросы и передавать
  полученную информацию в функцию обратного вызова
  */

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open('GET', LOAD_URL);
    xhr.send();
  };

  var onError = function (errorMessage) {
    var errorMessageElement = document.createElement('div');
    errorMessageElement.classList.add('error');
    errorMessageElement.style = 'position: absolute; top: 143%; left: 0px; right: 0px; z-index: 100; margin: 0px auto; width: 800px; font-size: 24px; color: rgb(255, 255, 255); text-align: center; line-height: 40px; box-shadow: 10px 10px 0 rgba(0, 0, 0, .25); background: rgb(238, 72, 48)';
    errorMessageElement.style.background = '#ee4830';

    errorMessageElement.textContent = errorMessage;
    document.body.appendChild(errorMessageElement);
  };

  window.backend = {
    load: load,
    save: save,
    onError: onError
  };
})();
