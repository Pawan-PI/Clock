let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let sec1 = date.getSeconds();

    let hnew = 30*hh +mm/2;
    let mnew =6*mm;
    let snew = 6 * sec1;

    hr.style.transform =`rotate(${hnew}deg)`;
    min.style.transform =`rotate(${mnew}deg)`;
    sec.style.transform =`rotate(${snew}deg)`;

}


setInterval(displayTime,1000);

