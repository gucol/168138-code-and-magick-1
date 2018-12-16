'use strict';
// ВОЗМОЖНОСТЬ ПЕРЕТАСКИВАТЬ ЗВЁЗДЫ ИЗ МАГАЗИНА В НАСТРОЙКИ ПЕРСОНАЖА:
(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  /* dragstart начинается, когда мы начинаем перетаскивать выбранный элемент, например, звезду:
  https://developer.mozilla.org/en-US/docs/Web/Events/dragstart
  evt.target — ссылка на объект, отправивший событие. Т.е. если событие возникло на <img class = ".setup-artifacts-shop">,
  то картинка звезды перетаскивается.
  Метод DataTransfer.setData(): https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData
  Далее — описание реакции на события перетаскивания:
  */

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
