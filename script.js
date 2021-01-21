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
const tempMonth = tempDate.getMonth();
const tempMonthDay = tempDate.getDate();

let month = months[tempMonth]
lastDay.innerHTML = `${tempYear}, ${tempMonthDay} ${month}, saat 12:00`;
console.log(tempMonth)
// Functions

// Teyin olunmush gun
const futureDate = new Date(tempYear, tempMonth, tempMonthDay + 7, 12, 0);
console.log(futureDate)
const future = futureDate.getTime();
function getRemainingTime() {
  // bugun
  const today = new Date().getTime();
  // teyin olunmus gunle bugunun ms ile ferqi
  const t = future - today;
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
setInterval(getRemainingTime, 1000);
