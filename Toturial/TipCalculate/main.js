const calculateTip = () =>{
    let total = document.getElementById('total').value
    let service = document.getElementById('service').value
    let sharing = document.getElementById('sharing').value
    let show =  document.getElementById('showTip')
    if(total < 0 || sharing < 0){
        show.style.display = "none"
        return
    }
    let sum = total * service / sharing
    sum.toFixed(2)
    show.style.display = "block"
    document.getElementById('show').innerText = sum + ' $' 
}

document.querySelector('#calculate-btn').onclick = () => {
    calculateTip()
}