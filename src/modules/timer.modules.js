import { Module } from '../core/module';

export class TimerModule extends Module {
		trigger() {
document.body.innerHTML = `
 <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="timer-container">
    <div id="timer-display">Таймер</div>
        <input type="text" id="timer-input" placeholder="MM:SS" maxlength="5">
    <button onclick="startTimer()">Старт</button>
        <button id="cancel-btn" onclick="cancelTimer()" style="display: none;">Отмена</button>

    </div>
</body>
</html>`
  const timerContainer = ('#timer-container')
  const timerDisplay = document.querySelector('#timer-display');
  const timerInput = document.querySelector('#timer-input');
  const cancelBtn = document.querySelector('#cancel-btn');

  let countdown = null
  function startTimer() {
      const timeString = timerInput.value;
      if (!isValidTimeFormat(timeString)) {
          alert('Введите время в формате ММ:SS');
            return;
            }
      const [minutes, seconds] = timeString.split(':').map(Number);
      const totalSeconds = minutes * 60 + seconds;

      if (totalSeconds <= 0) {
           alert('Введите время больше 0');
            return;
            }

    timerInput.style.display = 'none';
    const startButton = document.querySelector('button[onclick="startTimer()"]').style.display = 'none';
            cancelBtn.style.display = 'block';

            let remainingSeconds = totalSeconds;
            updateDisplay(remainingSeconds);

            countdown = setInterval(() => {
                remainingSeconds--;
                updateDisplay(remainingSeconds);

                if (remainingSeconds <= 0) {
                    clearInterval(countdown);
                    alert('Время вышло!');
                    timerContainer.remove();
                }
            }, 1000);
        }

        function cancelTimer() {
            clearInterval(countdown);
            timerContainer.remove();
        }

        function updateDisplay(seconds) {
            const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
            const secs = String(seconds % 60).padStart(2, '0');
            timerDisplay.textContent = `${mins}:${secs}`;
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


        timerInput.addEventListener('input', function(event) {
            let value = event.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + ':' + value.substring(2, 4);
            }
            event.target.value = value;
        });
		}
		// Внесены изменения
