import {addClass, removeClass} from './util.js';

const elementClassDisabled = [
  'ad-form',
  'map__filters',
];

const activateForm = () =>{
  elementClassDisabled.forEach((className) => {
    const foundElement = document.querySelector(`.${className}`);

    removeClass(foundElement, `${className}--disabled`);
    foundElement.querySelectorAll('.fieldset').forEach((Element) => {
      Element.removeAttribute.disabled = true;
    });
  });
};

const deactivateForm = () =>{
  elementClassDisabled.forEach((className) => {
    const foundElement = document.querySelector(`.${className}`);

    addClass(foundElement, `${className}--disabled`);
    foundElement.querySelectorAll('.fieldset').forEach((Element) => {
      Element.setAttribute.disabled = false;
    });
  });
};

deactivateForm();

export {deactivateForm, activateForm};
