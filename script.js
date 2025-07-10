const endDate = new Date("16 july, 2025 22:00:00").getTime();
const startDate = new Date().getTime();


function updateTimer(){
    const now = new Date().getTime();


    const distanceCovered = now - startDate;
    const distancePending = endDate - now;
    
    const oneDayInMills = (24*60*60*1000);
    const oneHourInMills = (60*60*1000);
    const oneMinInMills = (60*1000);
    const oneSecsInMills = (1000);


    const days = Math.floor(distancePending / oneDayInMills);
    const hrs = Math.floor((distancePending % (oneDayInMills)/ oneHourInMills));
    const mins = Math.floor((distancePending % oneHourInMills/ oneMinInMills));
    const secs = Math.floor((distancePending % oneMinInMills/ oneSecsInMills));


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;


    const totalDistance = endDate - startDate;


    const persentageDistance = (distanceCovered/totalDistance)*100;

    document.getElementById("progress-bar").style.width = persentageDistance + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%"
    }
}

let x = setInterval(updateTimer,1000);