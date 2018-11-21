'use strict';

var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_X = 100; // отступ облака горизонтальный
var CLOUD_Y = 10; // отступ облака вертикальный
var GAP = 10; // отступ
var SIDE_GAP = 40;
var BAR_WIDHT = 40; //ширина колонки
var BAR_GAP = 50; // отступ между колонками
var TEXT_HEIGHT = 20; // высота текста
var barHeight = CLOUD_HEIGHT - (CLOUD_Y * 2) - (TEXT_HEIGHT * 4) - (GAP * 2); //высота колонки

/* renderCloud рисует силуеты облака и тени */
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

/* getMaxElement возвращает наибольший элемент массива.
Если передать пустой массив в эту функцию, она будет работать неправильно (возвращает undefined).
Чтобы функция корректно работала с любыми массивами, её нужно видоизменить,
но пока не понимаю как. */
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function(ctx, players, times) {

/* Облако */
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

/* Победный текст */
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', CLOUD_X + SIDE_GAP, CLOUD_Y * 3);
  ctx.fillText('Список результатов:', CLOUD_X + SIDE_GAP, (CLOUD_Y * 3) + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

/*Гистограмма */
  ctx.fillStyle = '#000';

  for (var i = 0; i < players.length; i++) {
    /* Прописываем имя игрока и счёт: */
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + SIDE_GAP + ((BAR_WIDHT + BAR_GAP) * i), CLOUD_HEIGHT - CLOUD_Y * 2);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + SIDE_GAP + ((BAR_WIDHT + BAR_GAP) * i), CLOUD_HEIGHT - (GAP * 2.5) - TEXT_HEIGHT - (barHeight * times[i]) / maxTime);

    /* Определяем какой цвет будет у шкалы: */
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(225, ' + (Math.random() * 100) + '%, 30%)';
    }

    /* Отрисовываем шкалу: */
    ctx.fillRect(CLOUD_X + SIDE_GAP + ((BAR_WIDHT + BAR_GAP) * i), CLOUD_HEIGHT - CLOUD_Y - TEXT_HEIGHT, BAR_WIDHT, -(barHeight * times[i]) / maxTime);
  }
}
