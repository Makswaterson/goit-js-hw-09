// const startBtnRef = document.querySelector('[data-start]');
// const stopBtnRef = document.querySelector('[data-stop]');
// console.log(stopBtnRef);
// console.log(startBtnRef);
// let intervalId = null;
// console.log(intervalId);
// startBtnRef.addEventListener('click', onStartClick);
// stopBtnRef.addEventListener('click', onStopClick);

// function onStartClick(evt) {
//   intervalId = setInterval(() => {
//     document.body.style.backgroundColor = getRandomHexColor();
//     // console.log(evt.target);
//     // evt.target.disabled = true;

//     startBtnRef.disabled = true;
//     stopBtnRef.disabled = false;
//     console.log(intervalId);
//   }, 1000);
// }

// function onStopClick(evt) {
//   clearInterval(intervalId);
//   startBtnRef.disabled = false;
//   stopBtnRef.disabled = true;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

////////////////////////// 2 Variant //////////////////////////////////

const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');

let intervalId = null;

startBtnRef.addEventListener('click', onStartClick);
stopBtnRef.addEventListener('click', onStopClick);

function onStartClick(evt) {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    changeBtnCondition(true, false);
  }, 1000);
}

function onStopClick(evt) {
  clearInterval(intervalId);
  changeBtnCondition(false, true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBtnCondition(setAtrb, remAtrb) {
  startBtnRef.disabled = setAtrb;
  stopBtnRef.disabled = remAtrb;
}
