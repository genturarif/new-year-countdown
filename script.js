const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

// Update Countdown Time
function updateCountDownTime() {
  const currentTime = new Date();
  const differenceTime = newYearTime - currentTime;

  const daysDisplay = Math.floor(differenceTime / 1000 / 60 / 60 / 24);
  const hoursDisplay = Math.floor(differenceTime / 1000 / 60 / 60) % 24;
  const minutesDisplay = Math.floor(differenceTime / 1000 / 60) % 60;
  const secondsDisplay = Math.floor(differenceTime / 1000) % 60;

  days.innerHTML = daysDisplay;
  hours.innerHTML = hoursDisplay < 10 ? "0" + hoursDisplay : hoursDisplay;
  minutes.innerHTML = minutesDisplay < 10 ? "0" + minutesDisplay : minutesDisplay;
  seconds.innerHTML = secondsDisplay < 10 ? "0" + secondsDisplay : secondsDisplay;
}

setInterval(updateCountDownTime, 1000);
