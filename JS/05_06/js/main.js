var startStop = document.getElementsByClassName('startStop')[0];
var split = document.getElementsByClassName("split")[0];
var reset = document.getElementsByClassName('reset')[0];
var timerView = document.getElementsByClassName('timer')[0];
var watch = new Timer(timerView);

// watch.isOn = false;
startStop.addEventListener('click', function() {
    console.log('click on startBtn watch.isOn', watch.isOn);
    if(watch.isOn){
        console.log(' stop watch.isOn in if', watch.isOn);
        watch.stop();
        startStop.textContent = "Start";
    }else{
        console.log(' stop watch.isOn in else', watch.isOn);
        watch.start();
        startStop.textContent = 'Stop';
    }
});

reset.addEventListener('click', function () {
    if(watch.isOn) {
        watch.stop();
        watch.reset();
        startStop.textContent = 'Start'
        watch.isOn = false;
    }else{
        watch.reset();
        watch.isOn = false;
    }
});
