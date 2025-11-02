import { Module } from '../core/module';

import { getTime } from '../utils/timer';

export class TimerModule extends Module {
		trigger() {
			document.body.innerHTML += createTimerHTML();

		const timerContainer = ('#timer-container')
		const timerDisplay = document.querySelector('#timer-display');
		const timerInput = document.querySelector('#timer-input');
		const buttonStart = document.querySelector('#button');

		let countdown = null;

		alert('Введите время в формате ММ:SS');
		startBtn.addEventListener("click", startTimer)

		function startTimer() {
				const timeString = timerInput.value;
				if (!isValidTimeFormat(timeString)) {
							return;
							}

				const [minutes, seconds] = timeString.split(':').map(Number);

				updateDisplay(seconds);

				const totalSeconds = minutes * 60 + seconds;

				if (totalSeconds <= 0) {
						alert('Введите время больше 0');

							return;
							}

					timerInput.style.display = 'none';
					buttonStart.style.display = 'none';

            let remainingSeconds = totalSeconds;
            updateDisplay(remainingSeconds);

            countdown = setInterval(() => {
                remainingSeconds--;
                updateDisplay(remainingSeconds);

                if (remainingSeconds <= 0) {
                    clearInterval(countdown);
                    alert('Время вышло!');
                    timerContainer.remove();
										buttonStart.removeEventListener('click', startTimer);
                }
            }, 1000);
        }

				const time = getTime(seconds);
				timeDisplay.textContent = `${time.mins}:${time.secs}`;


        timerInput.addEventListener('input', function(event) {
            let value = event.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + ':' + value.substring(2, 4);
            }
            event.target.value = value;
        });


		}
	}
	function createTimerHtml() {
					return `
							<div id="timer-container">
							<div id="timer-display">Таймер</div>
								<input type="text" id="timer-input" placeholder="MM:SS" maxlength="5">
							<button id="button">Старт</button>
							</div>
						`;
					}
	function isValidTimeFormat(timeString) {
          const parts = timeString.split(':');
          if (parts.length !== 2) return false;

          const minutes = parseInt(parts[0], 10);
          const seconds = parseInt(parts[1], 10);

          return (
            !isNaN(minutes) && !isNaN(seconds) &&
            minutes >= 0 && minutes <= 59 &&
            seconds >= 0 && seconds <= 59
          );
        }

		// Внесены изменения
