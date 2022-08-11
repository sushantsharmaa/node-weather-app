const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const tempStatus = "{tempStatus}";

if (tempStatus === "Sunny") {
  weathercon.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
} else if (tempStatus === "Clouds") {
  weathercon.innerHTML = "<i class='fas fa-cloud' style='color: #dfe4ea'></i>";
}
if (tempStatus === "Rainy") {
  weathercon.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be'></i>";
} else {
  weathercon.innerHTML = "<i class='fas fa-cloud' style='color: #44c3de'></i>";
}

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
