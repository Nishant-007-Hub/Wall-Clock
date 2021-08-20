showTime();
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let ampm = document.getElementById("ampm")
let day = document.getElementById("day")

function showTime() {
    setInterval(() => {
        
        let now = new Date();
        
        let chour = now.getHours();
        // (chour>12) ? chour -= 12:
        if (chour>12) {
            chour -= 12
        }
        (chour>=12) ? ampm.innerHTML = "PM" : ampm.innerHTML = "AM";
        let cminute = now.getMinutes()
        let csecond = now.getSeconds()
        
        chour.toString().length == 1 ? hour.innerHTML = "0"+ chour : hour.innerHTML = chour
        cminute.toString().length == 1 ?  minute.innerHTML = "0"+ cminute:minute.innerHTML = cminute
        csecond.toString().length == 1 ? second.innerHTML = "0"+ csecond : second.innerHTML = csecond
        
        
        day.innerHTML = now.toString().slice(0, 15)
    }, 1000);
}
