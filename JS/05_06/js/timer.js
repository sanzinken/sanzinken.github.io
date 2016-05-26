var Timer = function(elem){
    var min = 0;
    var sec = 0;
    var mSec = 0;

    var interval;
    var offset;
    var time = 0;
    this.isOn = false;

     this.start = function(){
         if(!this.isOn){
             offset = Date.now();
             interval = setInterval(update.bind(this), 9);
             this.isOn = true;
         }
    };

    this.stop = function(){
        if(this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function(){
        time = 0;
        min = '00';
        sec = '00';
        mSec = '000';
        elem.textContent = min + ' : ' + sec + ' . ' + mSec;
        cleanSplitList();
    };

    this.split = function(){
        addTimeMark(timeFormater(time));
    };

    function update(){
            time += delta();
        var formTime = timeFormater(time);
        elem.textContent= formTime;
    };

    function delta(){
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    };

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
            mSec = '0' + mSec;
        }

        return min + ' : ' + sec + ' . ' + mSec;
    };
}
