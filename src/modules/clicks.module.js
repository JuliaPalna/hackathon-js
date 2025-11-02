import { Module } from '../core/module';
import '../styles/stylesClicker.css';

export class ClicksModule extends Module {
  trigger() {
    document.body.innerHTML += `
      <div class="container">
        <button id="clickButton" class="click-button">Кликай!</button>
        <div id="timer" class="timer"></div>
        <div id="results" class="results"></div>
      </div>
    `;

    this.initClicker();
  };

  initClicker() {
    let numberSingleClicks  = 0;
    let numberDoubleClicks  = 0;
    let isCounting = false;
    let timerInterval; 

    const clickButton = document.getElementById('clickButton');
    const timerElement = document.getElementById('timer'); 
    const resultsElement = document.getElementById('results'); 

    function startCounting() {
      if (isCounting) return;

      isCounting = true;
      numberSingleClicks  = 0;
      numberDoubleClicks  = 0;
      resultsElement.textContent = ''; 

      clickButton.disabled = false;
      clickButton.style.cursor = 'pointer'; 
      clickButton.style.opacity = '1'; 

      let timeLeft = 3;
      timerElement.textContent = timeLeft;

      timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
          clearInterval(timerInterval); 
          showResults(); 
          isCounting = false;

          clickButton.disabled = true;
          clickButton.style.cursor = 'not-allowed'; 
          clickButton.style.opacity = '0.7'; 

          setTimeout(function() {
            const container = document.querySelector('.container');
            if (container) {
              container.remove(); 
            }

            clickButton.removeEventListener('click', handleClick);
            clickButton.removeEventListener('dblclick', handleDoubleClick);
          }, 5000); 
        }
      }, 1000);
    }

    function handleClick() {
      if (!isCounting) {
        startCounting();
        return;
      }

      numberSingleClicks++;
    }

    function handleDoubleClick() {
      if (!isCounting) return;

      numberDoubleClicks++;
    }

    function showResults() {
      const totalClicks = numberSingleClicks + numberDoubleClicks;
      resultsElement.innerHTML = `
        Сколько кликов сделано: ${totalClicks}<br>
        Одинарных кликов: ${numberSingleClicks}<br>
        Двойных кликов: ${numberDoubleClicks}
      `;
    }

    clickButton.addEventListener('click', handleClick); 
    clickButton.addEventListener('dblclick', handleDoubleClick);
  }
};
