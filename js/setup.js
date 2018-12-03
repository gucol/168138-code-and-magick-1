'use strict';

// #12 Учебный проект: нас орда

// Показываем блок .setup
document.querySelector('.setup').classList.remove('hidden');
// Показывам блок .setup-similar
document.querySelector('.setup-similar').classList.remove('hidden');

// Массив цветов для coatColor:
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

// Массив цветов для eyesColor:
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// Массив имён:
var names = [
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
var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

// Функция, возвращающая случайный элемент массива:
var randomIndexReturn = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Функция, собирающая случайный комплект свойств из объявленных выше массивов:
var madeWizard = function () {
  var wizard = {
    name: randomIndexReturn(names) + ' ' + randomIndexReturn(surnames),
    coatColor: randomIndexReturn(coatColors),
    eyesColor: randomIndexReturn(eyesColors)
  };
  return wizard;
};

// Создание массива из четырёх случайных волшебников:
var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards.push(madeWizard());
}

// Место, в которое добавляем похожих персонажей:
var similarListElement = document.querySelector('.setup-similar-list');

// Находим шаблон #similar-wizard-template
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Отрисовываем сгенерированные DOM-элементы в блок .setup-similar-list. Вставляем элементы, используя DocumentFragment:
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);

// #15 Учебный проект: одеть Надежду
// 1. Открытие/закрытие окна настройки персонажа
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// Функция закрытия попапа:
var closePopup = function() {
  setup.classList.add('hidden');
}

// Функция открытия попапа:
var openPopup = function() {
  setup.classList.remove('hidden');

  /* Когда окно настройки персонажа открыто, нажатие на клавишу ESC должно закрывать диалог. 
  Обработчик закрытия окна по ESC стоит добавлять только тогда, когда окно появляется на странице. */
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  });
}

// При нажатии на .setup-open открывается окно .setup (через удаление класса hidden у блока)
setupOpen.addEventListener('click', openPopup);

// Нажатие на Enter на .setup-open также открывает попап:
setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
     openPopup();
  }
});

// При нажатии на .setup-close закрывается .setup (через добавление класса hidden блоку)
setupClose.addEventListener('click', closePopup);

// При нажатии на Enter на .setup-close окно тоже закрывается: 
setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Расширяем встроенные возможности валидации форм:
var userNameInput = setup.querySelector('.setup-user-name');

/* setCustomValidity — строка, содержащая ошибочное сообщение: https://developer.mozilla.org/ru/docs/Web/API/HTMLSelectElement/setCustomValidity
Спека validity (ValidityState) и его свойства: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState */
userNameInput.addEventListener('invalid', function (evt) {
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

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
  ]

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');

var changeCoatColor = function() {
  wizardCoat.style.fill = randomIndexReturn(COAT_COLORS);  
};

var changeEyesColor = function() {
  wizardEyes.style.fill = randomIndexReturn(EYES_COLORS);
}

// 3. Изменение цвета мантии персонажа по нажатию.
wizardCoat.addEventListener('click', changeCoatColor);
// 4. Изменение цвета глаз персонажа по нажатию.
wizardEyes.addEventListener('click', changeEyesColor);
// 5. Изменение цвета фаерболов по нажатию.
/*
Цвет задаётся через изменение фона у блока .setup-fireball-wrap. Возможные варианты цвета:


Для того, чтобы на сервер отправились правильные данные, при изменении параметров персонажа должно 
изменяться и значение соответствующего скрытого инпута.*/