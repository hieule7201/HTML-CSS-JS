let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')


const showCurrentTime = () =>{
    const currentTime = new Date()

    let h = currentTime.getHours()
    let m = currentTime.getMinutes()
    let s = currentTime.getSeconds()

    if(h < 10){
        h = '0' + h
    }
    if(m < 10){
        m = '0' + m
    }
    if(s < 10){
        s = '0' + s
    }

    hours.innerText = h
    minutes.innerText = m
    seconds.innerText = s
}

setInterval(() => {
    showCurrentTime()
}, 1000)