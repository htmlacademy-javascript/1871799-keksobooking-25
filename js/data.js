import {renderSimilarPopap, setTypeClick, setRoomsClick, setGuestsClick, setFeaturesClick, setPriceClick} from './map.js';
import {getErrorMessage} from './get-message.js';

const URL_DATA = 'https://25.javascript.pages.academy/keksobooking/data';
const RERENDER_DELAY = 500;

const debounce = (callback, timeoutDelay = RERENDER_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const getData = () => {
  fetch(URL_DATA)
    .then((response) => response.json())
    .then((offerElements) => {
      renderSimilarPopap(offerElements);
      setTypeClick(debounce(
        () => renderSimilarPopap(offerElements)
      ));
      setRoomsClick(debounce(
        () => renderSimilarPopap(offerElements)
      ));
      setGuestsClick(debounce(
        () => renderSimilarPopap(offerElements)
      ));
      setFeaturesClick(debounce(
        () => renderSimilarPopap(offerElements)
      ));
      setPriceClick(debounce(
        () => renderSimilarPopap(offerElements)
      ));
    })
    .catch(() => getErrorMessage()
    );
};

export {getData};
