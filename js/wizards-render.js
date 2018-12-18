'use strict';

// РЕНДЕРЮ ВОЛШЕБНИКОВ:
(function () {
  var NUMBER_OF_WIZARDS = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Отрисовываем сгенерированные DOM-элементы в блок .setup-similar-list. Вставляем элементы, используя DocumentFragment:
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  // Забираем данные с сервера и генерируем похожих волшебников:
  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < NUMBER_OF_WIZARDS; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }

    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  });
})();
