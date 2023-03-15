const imputE = document.querySelector('#email')
const espan =document.querySelector('.Clemail')
const ebutton = document.querySelector('.CbuttonE')

const exp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.(com|ru)$/

const email = () => {
    if (exp.test(imputE.value)) {
        espan.innerText = 'успешно'
        espan.style.color = 'green'
    }else {
        espan.innerText = 'неуспешно'
        espan.style.color = 'red'
    }
}

ebutton.onclick = () => email()

const inpupass = document.querySelector('#passw')
const inpupass2 = document.querySelector('#passw2')
const buttonpass = document.querySelector('.butpas')
const spanpass = document.querySelector('.Spanpas')
const ye = document.querySelector('.ye')

const exp1 = /^[a-zA-Z0-9]{8}$/

const pasword = () => {
    if (exp1.test(inpupass.value) && exp1.test(inpupass2.value)) {
        spanpass.innerText = 'ok'+''
        spanpass.style.color = 'green'
    }else {
        spanpass.innerText = 'not ok  23'
        spanpass.style.color = 'red'
    }
}
buttonpass.onclick = () => pasword()

ye.onclick = () => {
    inpupass.type = 'text'
    inpupass2.type = 'text'
}





function moveBl() {
    const block = document.getElementById('move');
    const currentPosition = parseInt(block.style.left || 0);
    const newPosition = currentPosition + 10;
    block.style.left = newPosition + 'px';
    if (newPosition < document.documentElement.clientWidth - 50) {
        requestAnimationFrame(moveBl);
    }
}

requestAnimationFrame(moveBl);