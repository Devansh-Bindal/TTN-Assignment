function startTime() {
    var today = new Date();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    ap = (hr < 12) ? "AM" : "PM"
    var session=(hr<4)?"Good Night":(hr<12)?"Good Morning":(hr<16)?"Good AfterNoon":(hr<20)?"Good Evening":"Good Night";
    // var session = (hr < 12) ? "Good Morning" : (hr < 16) ? "Good Afternoon" : (hr<20)?'Good Evening':"Good Night"
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    day = checkTime(day);
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("daySessions").innerHTML = session;
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + "  " + ap;
    document.getElementById("date").innerHTML =  day +" " +months[month] +" " + year ;
    var time = setTimeout(function(){ startTime() }, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startTime();