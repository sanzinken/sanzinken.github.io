var Timer = function(elem){
    var min = 0;
    var sec = 0;
    var mSec = 0;

    var interval;
    var offset;
    var time = 0;
    this.isOn = false;

     this.start = function(){
         console.log(this);
         if(!this.isOn){
             offset = Date.now();
             interval = setInterval(update.call(this), 9);
             console.log('after interval', interval);
             this.isOn = true;
             console.log (this.isOn);
             console.log('function START');
         }
    }

    this.stop = function(){
        if(this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
            console.log('function STOP');
        }
    }
    this.reset = function(){
        time = 0;
    }

    function update(){
        console.log('*******************update work!********************');
            time += delta();
        var formTime = timeFormater(time);
        console.log(formTime);
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
