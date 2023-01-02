import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDatePicker = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('[data-start]');
const timerRef = document.querySelector('.timer');

let TIMER_DEADLINE = null;

const notifyOptions = {
  position: 'center-center',
  width: ' 300px',
  fontSize: '20px',
  backOverlay: true,
  clickToClose: true,
  closeButton: true,
};

// startBtnRef.addEventListener('click', onStartClick);
// startBtnRef.setAttribute('disabled', 'disabled');

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     TIMER_DEADLINE = selectedDates[0];

//     if (selectedDates[0] <= new Date()) {
//       Notify.failure('Please choose a date in the future', notifyOptions);
//       startBtnRef.setAttribute('disabled', 'disabled');
//     } else {
//       startBtnRef.removeAttribute('disabled');
//     }
//   },
// };

// flatpickr(inputDatePicker, options);

// const timer = {
//   intervalId: null,
//   refs: {},

//   start(rootSelector, deadline) {
//     (this.intervalId = setInterval(() => {
//       const delta = deadline.getTime() - Date.now();

//       const data = this.convertMs(delta);
//       console.log(data);
//       this.refs.days.textContent = this.addLeadingZero(data.days);
//       this.refs.hours.textContent = this.addLeadingZero(data.hours);
//       this.refs.minutes.textContent = this.addLeadingZero(data.minutes);
//       this.refs.seconds.textContent = this.addLeadingZero(data.seconds);

//       if (delta <= 1000) {
//         clearInterval(this.intervalId);
//         Notify.success('The timer has passed!'), notifyOptions;
//       }
//     }, 1000)),
//       this.getRefs(rootSelector);
//     Notify.success('Time start!'), notifyOptions;
//   },
//   getRefs(rootSelector) {
//     this.refs.days = rootSelector.querySelector('[data-days]');
//     this.refs.hours = rootSelector.querySelector('[data-hours]');
//     this.refs.minutes = rootSelector.querySelector('[data-minutes]');
//     this.refs.seconds = rootSelector.querySelector('[data-seconds]');
//   },

//   convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
//   },

//   addLeadingZero(value) {
//     return String(value).padStart(2, '0');
//   },
// };

// function onStartClick() {
//   timer.start(timerRef, TIMER_DEADLINE);
// }

////////////////////////////////////////////////////////////////////////////////////////////////

startBtnRef.setAttribute('disabled', 'disabled');
startBtnRef.addEventListener('click', onStartClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    TIMER_DEADLINE = selectedDates;
    console.log(selectedDates);
    if (selectedDates[0] <= Date.now()) {
      startBtnRef.setAttribute('disabled', 'disabled');
      Notify.failure('Please choose a date in the future', notifyOptions);
    } else {
      startBtnRef.removeAttribute('disabled');
    }
  },
};

flatpickr(inputDatePicker, options);

const timer = {
  intervalId: null,
  refs: {},

  start(rootSelector, deadline) {
    this.intervalId = setInterval(() => {
      const delta = deadline.getTime() - Date.now();
      const data = this.convertMs(delta);
      this.makeElemetsValue(data);
      if (delta <= 1000) {
        clearInterval(this.intervalId);
        Notify.success('The timer has passed!'), notifyOptions;
      }
    }, 1000);
    this.getRefs(rootSelector);
    Notify.success('The time start!'), notifyOptions;
  },
  getRefs(rootSelector) {
    // const arr = [...rootSelector.children];
    // arr.forEach(item => {
    //   console.log(item);
    // });
    this.refs.days = rootSelector.querySelector('[data-days]');
    this.refs.hours = rootSelector.querySelector('[data-hours]');
    this.refs.minutes = rootSelector.querySelector('[data-minutes]');
    this.refs.seconds = rootSelector.querySelector('[data-seconds]');
  },
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },
  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },
  makeElemetsValue(data) {
    Object.entries(data).forEach(([name, value]) => {
      this.refs[name].textContent = this.addLeadingZero(value);
    });
  },
};

function onStartClick() {
  timer.start(timerRef, TIMER_DEADLINE);
}
