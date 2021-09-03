class CountdownTimer {
  constructor(selector, targetDate) {

    insertDom(targetDate);
    
      // DOM__________________________________________________

      function insertDom(targetDate) {

  setInterval(() => {
    const timerDiv = document.querySelector('.timer');

    timerDiv.innerHTML = '';

    timerDiv.insertAdjacentHTML('afterbegin', createMarkup(targetDate));
  }, 1000);
  
      }

      // Разметка_____________________________________________

      function createMarkup(targetDate) {

  const { days, hours, mins, secs } = timer(targetDate);
  let day = days;
  let hour = hours;
  let min = mins;
  let sec = secs;

  if (days.toString().length === 1) {
    day = `0${days}`
  };

  if (hours.toString().length === 1) {
    hour = `0${hours}`
  };

   if (mins.toString().length === 1) {
    min = `0${mins}`
  };

   if (secs.toString().length === 1) {
    sec = `0${secs}`
  };
    
    const markup =
        
        `<div class="timer" id="${selector}">
            <div class="field">
              <span class="value" data-value="days">${day}</span>
              <span class="label">Days</span>
            </div>

            <div class="field">
              <span class="value" data-value="hours">${hour}</span>
              <span class="label">Hours</span>
            </div>

            <div class="field">
              <span class="value" data-value="mins">${min}</span>
              <span class="label">Minutes</span>
            </div>

            <div class="field">
              <span class="value" data-value="secs">${sec}</span>
              <span class="label">Seconds</span>
            </div>
        </div>`
    
    return markup;
      };

      // Таймер_______________________________________________

      function timer(targetDate) {

    const startDate = new Date();

    const finishDate = new Date(targetDate);

    const time = finishDate - startDate;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    
    const countdown = {
        days: days,
        hours: hours,
        mins: mins,
        secs: secs,
    }

    return countdown;
      }

  }

};

new CountdownTimer('#timer-1', 'Sept 7, 2021');