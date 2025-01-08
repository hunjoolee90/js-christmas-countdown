const clockTitle = document.querySelector('.js-clock');

function countTilXMax() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const christmas = new Date(currentYear, 11, 25);

  if (currentDate > christmas) {
    christmas.setFullYear(currentYear + 1);
  }

  const timeLeft = christmas - currentDate;

  const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

countTilXMax();
setInterval(countTilXMax, 1000);
