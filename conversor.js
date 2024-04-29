const btnCel = document.querySelector('#btnCel');
const btnFa = document.querySelector('#btnFa');
const tempInput = document.querySelector('.temp-input');
let showTemp = document.querySelector('#showTemp')



btnCel.addEventListener('click', () => {
    let temInputValue = tempInput.value;
    showTemp.innerHTML = ((temInputValue - 32)/1.8) + " C";
    tempInput.value = '';
})


btnFa.addEventListener('click', () => {
    let temInputValue = tempInput.value;
    showTemp.innerHTML = (temInputValue * 1.8 + 32) + " F";
    tempInput.value = '';
})
