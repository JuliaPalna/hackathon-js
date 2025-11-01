import { Module } from '../core/module';

// добавил триггер и после него добавил код
export class ClicksModule extends Module {
  trigger() {
    let singleClicks = 0;
    let doubleClicks = 0;
    let totalClicks = 0;
    let isCounting = false;
    let timerInterval; 

    const clickButton = document.getElementById('clickButton');
    const timerElement = document.getElementById('timer'); 
    const resultsElement = document.getElementById('results'); 

    function startCounting() {
      if (isCounting) return;

      isCounting = true;
      singleClicks = 0;
      doubleClicks = 0;
      totalClicks = 0;
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
        }
      }, 1000);
    }

    function handleClick() {
      if (!isCounting) {
        startCounting();
        return;
      }

      singleClicks++;
      totalClicks++;
    }

    function handleDoubleClick() {
      if (!isCounting) return;

      doubleClicks++;
      totalClicks++;
    }

    function showResults() {
      resultsElement.innerHTML = `
        Сколько кликов сделано: ${totalClicks}<br>
        Одинарных кликов: ${singleClicks}<br>
        Двойных кликов: ${doubleClicks}
      `;
    }

    clickButton.addEventListener('click', handleClick); 
    clickButton.addEventListener('dblclick', handleDoubleClick);
      }
}
