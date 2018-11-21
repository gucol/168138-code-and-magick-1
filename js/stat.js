'use strict';

/*В новом файле js/stat.js определите функцию renderStatistics,
которая будет являться методом объекта window, со следующими параметрами:
ctx — канвас на котором рисуется игра.
names — массив, с именами игроков прошедших уровень.
Имя самого игрока — Вы. Массив имён формируется случайным образом.
times — массив, по длине совпадающий с массивом names.
Массив содержит время прохождения уровня соответствующего игрока из массива names.
Время прохождения уровня задано в миллисекундах.*/
  /*При вызове этой функции на канвас ctx должны быть выведены следующие элементы:
1. Белое облако с координатами [100, 10] высотой 270px и шириной 420px. Облако может быть как
правильным многоугольником, нарисованным методом fillRect, так и неправильным нарисованным с
помощью методов beginPath, moveTo, closePath, fill и других.*/

/*
2. Под облаком должна располагаться тень: многоугольник такой же формы,
залитый цветом rgba(0, 0, 0, 0.7) (полупрозрачный чёрный),
смещённый относительно белого на 10px вниз и вправо.*/

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDHT = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
var barHeight = CLOUD_HEIGHT - (CLOUD_Y * 2) - (TEXT_HEIGHT * 4) - (GAP * 2);


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, players, times) {

/*Облако*/
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

/*Победный текст*/
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', CLOUD_X + GAP, 30);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, 30 + TEXT_HEIGHT);
/*30 — отступ от верхнего края до строки. Убрать эти магические числа!*/

/*гистограмма новая */
  ctx.fillStyle = '#000';


  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + (GAP *2) + ((BAR_WIDHT + BAR_GAP) * i), CLOUD_HEIGHT - CLOUD_Y * 2);
    ctx.fillRect(CLOUD_X + (GAP *2) + ((BAR_WIDHT + BAR_GAP) * i), CLOUD_HEIGHT - CLOUD_Y - TEXT_HEIGHT, BAR_WIDHT, -barHeight);
  }
/*
  var playerIndex = 0;
  var playerName = 'Вы';

  //ctx.fillText(playerName, CLOUD_X + (GAP *2) + ((BAR_WIDHT + BAR_GAP) * playerIndex), CLOUD_HEIGHT - CLOUD_Y * 2);
  Положение имени игрока по вертикали — из высоты вычитаем двойной CLOUD_Y,
  чтобы текст не прилипал к краю облака
  ctx.fillRect(CLOUD_X + (GAP *2) + ((BAR_WIDHT + BAR_GAP) * playerIndex), CLOUD_HEIGHT - CLOUD_Y - TEXT_HEIGHT, BAR_WIDHT, -barHeight);

  var playerIndex = 1;
  var playerName = 'Катя';

  ctx.fillText(playerName, CLOUD_X + (GAP *2) + ((BAR_WIDHT + BAR_GAP) * playerIndex), CLOUD_HEIGHT - CLOUD_Y * 2);
  ctx.fillRect(CLOUD_X + (GAP *2) + ((BAR_WIDHT + BAR_GAP) * playerIndex), CLOUD_HEIGHT - CLOUD_Y - TEXT_HEIGHT, BAR_WIDHT, -barHeight);

  var playerIndex = 2;
  var playerName = 'Игорь';

  ctx.fillText(playerName, CLOUD_X + (GAP *2) + ((BAR_WIDHT + BAR_GAP) * playerIndex), CLOUD_HEIGHT - CLOUD_Y * 2);
  ctx.fillRect(CLOUD_X + (GAP *2) + ((BAR_WIDHT + BAR_GAP) * playerIndex), CLOUD_HEIGHT - CLOUD_Y - TEXT_HEIGHT, BAR_WIDHT, -barHeight);

};*/

/*гистограмма старая
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 110, 200);
  ctx.fillRect(CLOUD_X + GAP, 190, 40, -60);

  ctx.fillText('Катя', 110 + 90, 200);
  ctx.fillRect(CLOUD_X + GAP + 90, 190, 40, -80);

  ctx.fillText('Игорь', 110 + 90*2, 200);
  ctx.fillRect(110 + 90*2, 190, 40, -85);

};
*/

}

/*
3. На облаке должен быть отрисован текст сообщения ’Ура вы победили!\nСписок результатов:’
с помощью метода fillText. Текст должен быть набран шрифтом PT Mono размером 16px.
NB! Особенностью отрисовки текста на канвасе является то, что он не поддерживает перенос,
поэтому каждая новая строчка должна быть отрисована новым вызовом метода fillText или strokeText.*/

