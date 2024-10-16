const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");

const updateClock = () => {
  const currentDate = new Date();
  /* setTimeout(updateClock, 1000); */
  setInterval(updateClock, 1000);
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();

  const hourDeg = (currentHour / 12) * 360;
  const minuteDeg = (currentMinute / 60) * 360;
  const secondDeg = (currentSecond / 60) * 360;

  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
};

updateClock();
