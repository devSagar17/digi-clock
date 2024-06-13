let customDate = new Date();

function updateClock() {
  const now = customDate;
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  document.getElementById('hours-val').textContent = hours;
  document.getElementById('minutes-val').textContent = minutes;
  document.getElementById('seconds-val').textContent = seconds;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('en-US', options);
  document.getElementById('date').textContent = dateStr;
}

function changeHours() {
  const newHours = prompt('Enter new hours (0-23):', customDate.getHours());
  if (newHours !== null && !isNaN(newHours) && newHours >= 0 && newHours <= 23) {
    customDate.setHours(newHours);
    updateClock();
  }
}

function changeMinutes() {
  const newMinutes = prompt('Enter new minutes (0-59):', customDate.getMinutes());
  if (newMinutes !== null && !isNaN(newMinutes) && newMinutes >= 0 && newMinutes <= 59) {
    customDate.setMinutes(newMinutes);
    updateClock();
  }
}

function changeSeconds() {
  const newSeconds = prompt('Enter new seconds (0-59):', customDate.getSeconds());
  if (newSeconds !== null && !isNaN(newSeconds) && newSeconds >= 0 && newSeconds <= 59) {
    customDate.setSeconds(newSeconds);
    updateClock();
  }
}

setInterval(() => {
  customDate.setSeconds(customDate.getSeconds() + 1);
  updateClock();
}, 1000);

updateClock(); 
