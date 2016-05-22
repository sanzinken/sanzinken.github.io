var startStop = document.getElementsByClassName('startStop')[0];
var split = document.getElementsByClassName("split")[0];
var reset = document.getElementsByClassName('reset')[0];
var timerView = document.getElementsByClassName('timer')[0];
var watch = new Timer(timerView);

startStop.addEventListener('click', function() {
    if(watch.isOn){
        startStop.textContent = "Start";
        watch.stop();
    }else{
        startStop.textContent = 'Stop';
        watch.start();
    }
});

reset = addEventListener('click', function () {
    if(watch.isOn) {
        watch.stop();
        watch.reset();
        startStop.textContent = 'Stop'
        watch.isOn = false;
    }else{
        watch.reset();
        watch.isOn = false;
    }
})
