// Таймер_______________________________________________

function timer(targetDate) {

    const startDate = new Date();
    console.log(startDate);

    const finishDate = new Date(targetDate);
    console.log(finishDate);

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
    console.log(countdown);
    return countdown;
}

// _____________________________________________________

// Разметка_____________________________________________


function createMarkup(targetDate) {

    timer(targetDate);
    // console.log(timer(targetDate));

    const { days, hours, mins, secs } = timer(targetDate);
    
    const markup =
        
        `<div class="timer" id="timer-1">
            <div class="field">
              <span class="value" data-value="days">${days}</span>
              <span class="label">Days</span>
            </div>

            <div class="field">
              <span class="value" data-value="hours">${hours}</span>
              <span class="label">Hours</span>
            </div>

            <div class="field">
              <span class="value" data-value="mins">${mins}</span>
              <span class="label">Minutes</span>
            </div>

            <div class="field">
              <span class="value" data-value="secs">${secs}</span>
              <span class="label">Seconds</span>
            </div>
        </div>`
    
    console.log(markup);
    return markup;
};

createMarkup('Sept 7, 2021');
// _____________________________________________________

// DOM__________________________________________________

const body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', createMarkup('Sept 7, 2021'));