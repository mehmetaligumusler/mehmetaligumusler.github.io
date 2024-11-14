function updateTime() {
    const now = new Date();
    const readableTime = now.toLocaleTimeString();
    document.getElementById('time').innerHTML = readableTime;
}
setInterval(updateTime, 1000);