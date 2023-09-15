let mysound = document.getElementById("mysound");
let icon = document.getElementById("icon");

icon.onclick = function () {
    if (mysound.paused) {
        mysound.play();
 icon.src = "https://media.geeksforgeeks.org/wp-content/uploads/20210402235545/Pause.png";
    } else {
        mysound.pause();
    icon.src = "https://media.geeksforgeeks.org/wp-content/uploads/20210402235520/play.png";
    }
}
