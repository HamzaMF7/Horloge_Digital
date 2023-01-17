const date = new Date();

var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

document.querySelector(".hours").innerHTML = h;
document.querySelector(".munites").innerHTML = m;
document.querySelector(".seconds").innerHTML = s;

function Horloge() {
  setInterval(function () {
    s++;
    if (s == 59) {
      document.querySelector(".seconds").innerHTML = s;
      s = 0;
      if (m < 59) {
        if (m < 9) {
          setTimeout(function () {
            document.querySelector(".munites").innerHTML = `0${++m}`;
          }, 1000);
        } else {
          setTimeout(function () {
            document.querySelector(".munites").innerHTML = ++m;
          }, 1000);
        }
      } else {
        setTimeout(function () {
          if (h < 23) document.querySelector(".hours").innerHTML = ++h;
          m = 0;
          document.querySelector(".munites").innerHTML = "";
          document.querySelector(".munites").innerHTML = "00";
        }, 1000);
      }
    } else if (s <= 9) document.querySelector(".seconds").innerHTML = `0${s}`;
    else document.querySelector(".seconds").innerHTML = s;
  }, 1000);
} // End

Horloge();
