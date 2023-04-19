let elTime = document.querySelector('#time')
formatTime = (timeObj) => {
    if (timeObj.hours < 10){
        timeObj.hours = `0${timeObj.hours}`
    }
    if (timeObj.minutes < 10){
        timeObj.minutes = `0${timeObj.minutes}`
    }
    if (timeObj.seconds < 10) {
        timeObj.seconds = `0${timeObj.seconds}`
    }
    return timeObj
}
let getTime = () => {
    let timeNow = new Date()
    timeNow = {
        hours: timeNow.getHours(),
        minutes: timeNow.getMinutes(),
        seconds: timeNow.getSeconds()
    }
    return formatTime(timeNow)
}
const setTime = () => {
    let currentTime = getTime()
    elTime.style.color = "#FFF"
    elTime.innerHTML = `${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds} | aaa-aa-aaa`
}
setInterval ( setTime , 1000) 

let btnMikro = document.querySelector('#mk')
themStatus = 0
btnMikro.addEventListener('click', () => {
    if ( themStatus == 0){
        btnMikro.style.background = "grey" 
    } else {
        btnMikro.style.background = "red"
    }
})




// var notes = document.querySelectorAll('li');

// for (var i = 0; i < notes.length; i++) {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     var timeString = hours + ':' + minutes + ':' + seconds;
//     notes[i].querySelector('.time').textContent = timeString;
// }