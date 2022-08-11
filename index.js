const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const tempStatus = "Cloud";

const getCurrentDay = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const d = new Date();
  let day = days[d.getDay()];
  return day;
};

const getCurrentTime = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date();
  let month = months[d.getMonth()];
  let day = d.getDate();

  let hours = d.getHours();
  let minutes = d.getMinutes();

  let period = "AM";

  if (hours > 11) {
    period = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${month} ${day} | ${hours}:${minutes} ${period}`;
};

curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();

getCurrentTime();
