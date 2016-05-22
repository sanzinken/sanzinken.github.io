var Timer = function(elem){
    var min = 0;
    var sec = 0;
    var mSec = 0;

    var isOn = false;
    var interval;
    var offset;
    var time = 0;

     this.start = function(){
         if(!isOn){
             offset = Date.now();
             interval = setInterval(update, 9);
             this.isOn = true;
             console.log("this ",this);
             console.log(isOn, "on start function");
         }
    }

    this.stop = function(){
  console.log('in stop function in timer.js but not in if: ',  isOn);

        if(isOn){
            console.log('isOn in stop function in timer.js');
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    }

    this.reset = function(){
        time = 0;
    }

    function update(){
            time += delta();
        var formTime = timeFormater(time);
        elem.textContent= formTime;
    }

    function delta(){
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormater(timeInMilliseconds) {

        var time = new Date(timeInMilliseconds);
        mSec = time.getMilliseconds().toString();
        sec =  time.getSeconds().toString();
        min =  time.getMinutes().toString();

        if(min.length < 2){
            min = '0' + min;
        }
        if(sec.length < 2){
            sec = '0' + sec;
        }
        while (mSec.length < 3) {
            // if (mSec.length < 2) {
            //     mSec = '00' + mSec;
            // }
            mSec = '0' + mSec;
        }

        return min + ' : ' + sec + ' . ' + mSec;
    }
}
