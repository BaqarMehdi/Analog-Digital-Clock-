var second = 0;
var minute = 0;
var hour = 0;

setInterval(function () {
  // Get the current time
  var d = new Date();

  // Calculate rotation angles for clock hands
  second = d.getSeconds() * 6;
  minute = d.getMinutes() * 6;
  hour = d.getHours() * 30 + Math.round(minute / 12);

  // Update the styles of clock hands elements
  document.getElementById("second-hand").style.transform =
    "rotate(" + second + "deg)";
  document.getElementById("minute-hand").style.transform =
    "rotate(" + minute + "deg)";
  document.getElementById("hour-hand").style.transform =
    "rotate(" + hour + "deg)";
}, 1000);

// -----------------


const time = document.getElementById("time");
const timeFormat = document.getElementById("timeFormat");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showTime, 1000);
});

showTime = () => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  // Convert 24-hour format to 12-hour format
  hr = hr % 12;
  hr = hr < 10 ? `0${hr}` : hr;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  // Display time and time format
  time.innerHTML = `${hr}:${min}:${sec}`;
  timeFormat.innerHTML = hr >= 12 ? "AM" : "PM";

  console.log("hr: " + hr + " min: " + min + " sec: " + sec);
};

