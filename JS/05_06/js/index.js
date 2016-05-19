var timer = function(){
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
             interval = setInterval(update, 10);
             isOn = true;
         }
    };

    this.stop = function(){

    };
    this.clear = function(){

    }

    function update(){
        time += delta();
        console.log(timeFormater(time));
    }

    function delta(){
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormater(timeInMilliseconds) {
        var time = new Date(timeInMilliseconds);
        mSec = time.getMilliseconds();
        sec =  time.getSeconds();
        min =  time.getMinutes();

        if(min.length < 2){
            min = '0' + min;
        }
        if(sec.length < 2){
            sec = '0' + sec;
        }
        if (mSec.length < 3) {
            if (mSec.length < 2) {
                mSec = '00' + mSec;
            }
            mSec = '0' + mSec;
        }

        return min + ' : ' + sec + ' . ' + mSec;
    };
}
