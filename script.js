const months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "İyun",
  "İyul",
  "Avqust",
  "Senttybr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];
const weekdays = [
  "Bazar",
  "Bazar ertəsi",
  "Çərşənbə axşamı",
  "Çərşənbə",
  "Cümə axşamı",
  "Cümə",
  "Şənbə",
];
// Variables
const lastDay = document.querySelector(".last-day");
const items = document.querySelectorAll(".countdown-box .time-num");

// elan gunu
const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = months[tempDate.getMonth()];
const tempMonthDay = tempDate.getDate();
const tempWeekDay = weekdays[tempDate.getDay()];

lastDay.innerHTML = `${tempYear} ${tempWeekDay} günü, ${tempMonthDay} ${tempMonth}, saat 12:00`;

// Functions

// Teyin olunmush gun
const futureDate = new Date(2021, tempMonth, tempMonthDay + 5, 12, 0);
function getRemainingTime() {
  // bugun
  const today = new Date();
  // teyin olunmus gunle bugunun ms ile ferqi
  const t = futureDate - today;
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // qaliqlarin hesablanmasi
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
}

// Countdown
setInterval(getRemainingTime,1000)
