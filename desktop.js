// const loadpage = document.getElementById("loadpage");
// window.addEventListener("load", function () {
//   loadpage.style.display = "none";
// });
setTimeout(function () {
  loadpage.style.display = "none";
}, 1000);

// var dt = new Date();
// var dayName = dt.toString().split(" ")[0];
// document.getElementById("time").innerHTML =
//   ("0" + dt.getHours()).slice(-2) +
//   ":" +
//   ("0" + dt.getMinutes()).slice(-2) +
//   "  " +
//   dayName +
//   "   " +
//   ("0" + dt.getDate()).slice(-2) +
//   "/" +
//   ("0" + (dt.getMonth() + 1)).slice(-2) +
//   "/" +
//   dt.getFullYear();

let time = moment().format("dddd, MMMM Do YYYY, h:mm A");

document.getElementById("time").innerHTML = time + ".";
console.log(time);

// var update = function () {

// };
// setInterval(update, 1000);

// fetch("http://ip-api.com/json/")
//   .then((res) => res.json())
//   .then((response) => {
//     console.log("Country: ", response.country);
//   })
//   .catch((data, status) => {
//     console.log("Request failed");
//   });

var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://api.ipdata.co/?api-key=4a93aefa6ca90f6eda7815a32b3dfad0ce0169c650d323bf9ef90fc1"
);

request.setRequestHeader("Accept", "application/json");

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    // document.getElementById("time").innerHTML = this.responseText;
    let locdata = JSON.parse(this.responseText);
    document.getElementById("location").innerHTML =
      locdata.city + "," + " " + locdata.country_name + ".";
  }
};

request.send();

const info = document.getElementById("info");
const bridge = document.getElementById("bridge");
const logo = document.getElementById("logo");
logo.addEventListener("click", bridgepos);
logo.addEventListener("mouseover", bridgepos);
logo.addEventListener("mouseout", movebridgex);

function bridgepos() {
  let xd = logo.getBoundingClientRect();
  x = xd.left;
  bridge.style.left = x + 23 + "px";
  bridge.style.height = "1.5rem";
  if (bridge.style.left === x + 23 + "px") {
    bridge.style.width = "1px";
  }
}
bridgepos();

const wl = document.getElementById("wl");
const work = document.getElementById("work");
const about = document.getElementById("about");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact");
work.addEventListener("click", movebridge);
work.addEventListener("mouseover", movebridge);
// work.addEventListener("mouseout", movebridgex);
about.addEventListener("click", movebridge1);
about.addEventListener("mouseover", movebridge1);
// about.addEventListener("mouseout", movebridgex);
blog.addEventListener("click", movebridge2);
blog.addEventListener("mouseover", movebridge2);
// blog.addEventListener("mouseout", movebridgex);
contact.addEventListener("click", movebridge3);
contact.addEventListener("mouseover", movebridge3);
// contact.addEventListener("mouseout", movebridgex);

function movebridgex() {
  if (workpage.style.opacity === "0") {
    bridgepos();
  }
  if (workpage.style.opacity === "1") {
    movebridge();
  }
  if (aboutpage.style.opacity === "1") {
    movebridge1();
  }
  if (blogpage.style.opacity === "1") {
    movebridge2();
  }
  if (contactpage.style.opacity === "1") {
    movebridge3();
  }
}

// let k = work.getBoundingClientRect();
// p = k.left;
// info.style.setProperty("left", p - 12 + "px");

// setTimeout(function () {
//   info.style.display = "none";
// }, 5000);

function movebridge() {
  let xd = work.getBoundingClientRect();
  x = xd.left;
  // bridge.style.left = x + 22 + "px";
  // info.style.left = x + "px";

  bridge.style.setProperty("left", x + 22 + "px");
  bridge.style.transitionDelay = "0s";
  if (bridge.style.left === x + 22 + "px") {
    bridge.style.width = "1px";
  }
}
function movebridge1() {
  let x1d = about.getBoundingClientRect();
  x1 = x1d.left;
  bridge.style.left = x1 + 25 + "px";
  bridge.style.transitionDelay = "0s";
}
function movebridge2() {
  let x2d = blog.getBoundingClientRect();
  x2 = x2d.left;
  bridge.style.left = x2 + 18 + "px";
  bridge.style.transitionDelay = "0s";
}
function movebridge3() {
  let x2d = contact.getBoundingClientRect();
  x2 = x2d.left;
  bridge.style.left = x2 + 34 + "px";
  bridge.style.transitionDelay = "0s";
}

//---------------mainpage--------------
const sierra = document.getElementById("sierra");
const mainpage = document.getElementById("mainpage");
logo.addEventListener("click", displayhomepage);
logo.addEventListener("mouseover", displayhomepage);
function displayhomepage() {
  mainpage.style.opacity = "1";
  mainpage.style.pointerEvents = "all";
  // workpage.style.height = "0";
  workpage.style.opacity = "0";
  workpage.style.pointerEvents = "none";
  aboutpage.style.opacity = "0";
  // aboutpage.style.height = "0";
  aboutpage.style.pointerEvents = "none";
  blogpage.style.opacity = "0";
  // blogpage.style.height = "0";
  blogpage.style.pointerEvents = "none";
  contactpage.style.opacity = "0";
  // contactpage.style.height = "0";
  contactpage.style.pointerEvents = "none";
}

//---------------workpage--------------
const workpage = document.getElementById("workpage");
const awork = document.getElementById("awork");
awork.addEventListener("click", displayworkpagex);
awork.addEventListener("mouseover", displayworkpage);
// awork.addEventListener("mouseout", hideworkpage);

function displayworkpagex() {
  workpage.style.opacity = "1";
  workpage.style.pointerEvents = "all";
}
function displayworkpage() {
  workpage.style.height = "91vh";
  workpage.style.opacity = "1";
  workpage.style.pointerEvents = "all";
  // hidecontactpage();
  // hideaboutpage();
  // hideblogpage();
  aboutpage.style.opacity = "0";
  aboutpage.style.pointerEvents = "none";
  blogpage.style.opacity = "0";
  blogpage.style.pointerEvents = "none";
  contactpage.style.opacity = "0";
  contactpage.style.pointerEvents = "none";
  mainpage.style.opacity = "0";
  mainpage.style.pointerEvents = "none";
  bridge.style.transitionDelay = "0s";
}
function hideworkpage() {
  if (workpage.style.pointerEvents === "all") {
  } else {
    workpage.style.opacity = "0";
    workpage.style.pointerEvents = "none";
  }
}

//---------------aboutpage--------------
const aboutpage = document.getElementById("aboutpage");
const aabout = document.getElementById("aabout");
aabout.addEventListener("click", displayaboutpagex);
aabout.addEventListener("mouseover", displayaboutpage);
// aabout.addEventListener("mouseout", hideaboutpage);

function displayaboutpagex() {
  aboutpage.style.opacity = "1";
  aboutpage.style.pointerEvents = "all";
}
function displayaboutpage() {
  aboutpage.style.height = "91vh";
  aboutpage.style.opacity = "1";
  aboutpage.style.pointerEvents = "all";
  // hideworkpage;
  // hidecontactpage();
  // hideaboutpage();
  workpage.style.opacity = "0";
  workpage.style.pointerEvents = "none";
  blogpage.style.opacity = "0";
  blogpage.style.pointerEvents = "none";
  contactpage.style.opacity = "0";
  contactpage.style.pointerEvents = "none";
  mainpage.style.opacity = "0";
  mainpage.style.pointerEvents = "none";
  bridge.style.transitionDelay = "0s";
}
function hideaboutpage() {
  if (aboutpage.style.pointerEvents === "all") {
  } else {
    aboutpage.style.opacity = "0";
    aboutpage.style.pointerEvents = "none";
  }
}

//---------------blogpage--------------
const blogpage = document.getElementById("blogpage");
const ablog = document.getElementById("ablog");
ablog.addEventListener("click", displayblogpagex);
ablog.addEventListener("mouseover", displayblogpage);
// ablog.addEventListener("mouseout", hideblogpage);

function displayblogpagex() {
  blogpage.style.opacity = "1";
  blogpage.style.pointerEvents = "all";
}
function displayblogpage() {
  blogpage.style.height = "91vh";
  blogpage.style.opacity = "1";
  blogpage.style.pointerEvents = "all";
  // hideworkpage();
  // hideaboutpage();
  // hidecontactpage();
  workpage.style.opacity = "0";
  workpage.style.pointerEvents = "none";
  aboutpage.style.opacity = "0";
  blogpage.style.pointerEvents = "none";
  contactpage.style.opacity = "0";
  contactpage.style.pointerEvents = "none";
  mainpage.style.opacity = "0";
  mainpage.style.pointerEvents = "none";
  bridge.style.transitionDelay = "0s";
}
function hideblogpage() {
  if (blogpage.style.pointerEvents === "all") {
  } else {
    blogpage.style.opacity = "0";
    blogpage.style.pointerEvents = "none";
  }
}

//---------------contactpage--------------

const contactpage = document.getElementById("contactpage");
const acontact = document.getElementById("acontact");
acontact.addEventListener("click", displaycontactpagex);
acontact.addEventListener("mouseover", displaycontactpage);
// acontact.addEventListener("mouseout", hidecontactpage);
const bus1 = document.getElementById("business1");
const bus2 = document.getElementById("business2");
function displaycontactpagex() {
  contactpage.style.opacity = "1";
  contactpage.style.pointerEvents = "all";
}
function displaycontactpage() {
  contactpage.style.height = "91vh";
  contactpage.style.opacity = "1";
  contactpage.style.pointerEvents = "all";
  // hideworkpage();
  // hideaboutpage();
  // hideblogpage();
  workpage.style.opacity = "0";
  workpage.style.pointerEvents = "none";
  aboutpage.style.opacity = "0";
  aboutpage.style.pointerEvents = "none";
  blogpage.style.opacity = "0";
  blogpage.style.pointerEvents = "none";
  mainpage.style.opacity = "0";
  mainpage.style.pointerEvents = "none";
  bridge.style.transitionDelay = "0s";
  bus1.className = "business";
  bus2.className = "business";
}
function hidecontactpage() {
  if (contactpage.style.pointerEvents === "all") {
  } else {
    contactpage.style.opacity = "0";
    contactpage.style.pointerEvents = "none";
  }
}

// var s = document.getElementsByTagName("a");
// // var show = function(){
// //    alert('hahahha');
// // }
// for (var i = 0; i < s.length; i++) {
//   s[i].onclick = createRipple;
// }

// function createRipple(e) {
//   var d = 50;
//   var circle = document.createElement("div");
//   this.appendChild(circle);
//   circle.style.width = circle.style.height = d + "px";
//   circle.style.left = e.clientX - d / 2 + "px";
//   circle.style.top = e.clientY - d / 2 + "px";

//   circle.classList.add("ripple");
// }
