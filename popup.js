setTimeout(refresh, 1000);

setTimeout(setClock, 1000);

function setClock() {
    const clock = document.getElementById('clock');
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    clock.innerText = document.title = hours + ":" + minutes
}

function refresh() {
    var currentdate = new Date();
    const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
    const time = new Intl.DateTimeFormat("en-US", options).format();
    document.getElementById("time").innerHTML = time;
}

const CODING_CHALLENGE_RSSFEED = "https://codingchallenges.substack.com/feed";

chrome.runtime.sendMessage({site: "codingchallenges", options: { 
    url: CODING_CHALLENGE_RSSFEED
  }}, function(res) {
    console.log(res);
  });