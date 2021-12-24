let min = 25;
let sec = 60;
let intervalTimer = 0;

const htmlMinutes = document.getElementById('minutes');
const htmlSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('buttonStart');
const buttonStop = document.getElementById('buttonStop');
const buttonReset = document.getElementById('buttonReset');
const breakTime = document.getElementById('break')

const timer = () => {
	sec--;
	htmlSeconds.innerHTML = sec;
	if (sec === 00) {
		sec = 59;
		min--;
		htmlMinutes.innerHTML = min;
	}
    else if( min === 00) {
        breakTime.innerHTML = 'Time for break!'
        reset()

    }
};

const start = () => {
	htmlMinutes.innerHTML = min - 1;
	intervalTimer = setInterval(timer, 1000);
};

const pause = () => {
	clearInterval(intervalTimer);
};

const reset = () => {
	htmlMinutes.innerHTML = 25;
	htmlSeconds.innerHTML = '00';
	pause();
};

buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', pause);
buttonReset.addEventListener('click', reset);
