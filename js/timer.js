const timerBlock = document.querySelector(".timer__time");
const deadLine = "31 march 2022";

let interval;

const updateLock = () => {
  const dateStart = new Date().getTime();
  const dateDeadLine = new Date(deadLine).getTime();
  const timeRemaining = (dateDeadLine - dateStart) / 1000;

  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor(timeRemaining / 60 / 60 - days * 24);
  const min = Math.floor((timeRemaining / 60) % 60);
  const sec = Math.floor(timeRemaining % 60);

  const fDays = days < 10 ? "0" + days : days;
  const fHours = hours < 10 ? "0" + hours : hours;

  const fMin = min < 10 ? "0" + min : min;
  const fsec = sec < 10 ? "0" + sec : sec;
  timerBlock.textContent = `${fDays}:${fHours}:${fMin}:${fsec}`;

  if (timeRemaining <= 0) {
    clearInterval(interval);
    timerBlock.textContent = `Акция закончена`;
  }
};

updateLock();

interval = setInterval(updateLock, 500);
