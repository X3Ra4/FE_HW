const table = document.getElementById('pifagor');

for (let i = 1; i <= 10; i++) {
    const newTr = document.createElement('tr');
    newTr.textContent = '';
    
    for (let j = 1; j <= 10; j++) {
        const newTd = document.createElement('td');
        newTd.textContent = j * i;
        newTr.appendChild(newTd);
    }
    table.appendChild(newTr);
}


// hw2



const buttonForSwap = document.getElementById('swap_button');
let lastColor;
buttonForSwap.addEventListener('click', e => {
    e.preventDefault();
    if (buttonForSwap.style.color !== 'red') {
        lastColor = buttonForSwap.style.color;
        buttonForSwap.style.color = 'red';
    }
    else {
        buttonForSwap.style.color = lastColor;
    }
})



// hw3


const buttonForGetImg = document.getElementById('img_button');
const imgPrint = document.getElementById('randomImg')
buttonForGetImg.addEventListener('click', e => {
    e.preventDefault();
    let imgScr = Math.floor(Math.random() * 9) + 1;
    imgPrint.setAttribute('src', `img/${imgScr}.png`);
})