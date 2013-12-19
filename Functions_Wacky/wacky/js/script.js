/**
 * Created by tomaszuluaga on 12/19/13.
 */
//Functions assignment wacky

//a function that will return a greeting based on the time of the day

function greeting(){
    var message = ""
    var istheSunStillout = new Date().getHours();// will get the time of the day
    if (istheSunStillout <18)//if earlier than 6 (12 + 6 = 18 ) good day
    {
        message="Sun still out! Good day!!!"
    }
    else{
    message="Moon is out! Good evening"// otherwise good evening
    }
    console.log(message);

}


greeting();