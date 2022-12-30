import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
console.log(Notify);
console.log(flatpickr);

const inputDatePicker = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('[data-start]');
console.log(startBtnRef);
const timerRef = document.querySelector('.timer');
const notifyOptions = {
  position: 'center-center',
  width: ' 300px',
  fontSize: '20px',
  backOverlay: true,
  clickToClose: true,
  closeButton: true,
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
