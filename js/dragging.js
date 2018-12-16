'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var dialogHandler = setup.querySelector('.upload');
  var dragged;
  var startCoords;

  dialogHandler.addEventListener('mousedown', function (evt) {
    // Сброс событий по умолчанию:
    evt.preventDefault();

    // Запомним координаты точки, с которой мы начали перемещать диалог:
    startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    // Было ли перемещение объекта?
    dragged = false;

    // Обработчик события перемещения курсора
    var onMouseMove = function (moveEvt) {
      // Удаление событи по умолчанию, см. MDN: https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault
      moveEvt.preventDefault();

      // Фиксируем, что произошло перемещение:
      dragged = true;

      // Записываем вносим изменения, фиксируем перемещение курсора:
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      // Обновляем стартовые данные:
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      // Смещаем перетаскиваемый объект за курсором:
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    // Как только мышку отпустили, мы перестаём слушать события движения мыши:
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      /*
      Выбор аватара — это нажатие без перемещения, а если мы нажали и начали двигать курсор,
      то действие выбора файла надо отменить: с dialogHandler снимаем слушание клика, приводящего к загрузке аватарки.
      */
      if (dragged) {
        var onClickPreventDefault = function (draggedEvt) {
          draggedEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
