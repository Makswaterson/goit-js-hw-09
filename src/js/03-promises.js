import { Notify } from 'notiflix/build/notiflix-notify-aio';
console.log(Notify);

const delayInputRef = document.querySelector('input[name="delay"]');
const stepInputRef = document.querySelector('input[name="step"]');
const amountInputRef = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  let delay = Number(delayInputRef.value);

  for (let index = 1; index <= amountInputRef.value; index++) {
    delay += Number(stepInputRef.value);
    console.log(delay);
    createPromise(index, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
