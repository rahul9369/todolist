const date = document.getElementById("date");
const prev = document.getElementById("p");
const next = document.getElementById("n");
const ne = document.querySelector(".sp2");

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const D = new Date();

let d = D.getDate();
let m = D.getMonth();
let y = D.getFullYear();

function prevfun() {
  if (d == 1) {
    m = m - 1;
  }
  d = d - 1;
  date.innerText = `${month[m]} ${d}, ${y}`;
  ne.innerText = " NEXT DAY";
  // console.log("done");
}

// if(ne.innerText='NEXT DAY'){

// }
function nextfun() {
  if (D.getDate() == d) {
    console.log("unchange");
  } else {
    d = d + 1;
    if (D.getDate() == d) {
      date.innerText = `TODAY`;
      ne.innerText = " UPCOMING";
    } else {
      date.innerText = `${month[m]} ${d}, ${y}`;
    }
  }
}

prev.onclick = prevfun;
next.onclick = nextfun;
