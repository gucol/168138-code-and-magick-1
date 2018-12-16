'use strict';

// РЕНДЕРЮ ВОЛШЕБНИКОВ:
(function () {
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
  for (var j = 0; j < window.wizardsDatas.length; j++) {
    fragment.appendChild(renderWizard(window.wizardsDatas[j]));
  }

  similarListElement.appendChild(fragment);
})();
