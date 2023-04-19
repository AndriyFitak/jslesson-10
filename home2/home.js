var notes = document.querySelectorAll('li');

for (var i = 0; i < notes.length; i++) {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = hours + ':' + minutes + ':' + seconds;
    notes[i].querySelector('.time').textContent = timeString;
}