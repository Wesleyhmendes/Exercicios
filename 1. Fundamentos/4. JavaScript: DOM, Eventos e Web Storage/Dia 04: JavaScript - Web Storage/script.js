//requisito 1 -----------------------------------------------------------
const section = document.querySelector('#background-color');
const buttons = section.querySelectorAll('button');
const body = document.body;

buttons.forEach(buttonFunction => {
    
    buttonFunction.addEventListener('click', (event) => {
        const corClicada = event.target.innerText;
        localStorage.setItem('cor', corClicada);
        const corBackground = localStorage.getItem('cor');

        body.style.backgroundColor = corBackground;
    });
});

//requisito 2 -----------------------------------------------------------

const fontSection = document.querySelector('#font-color');
const fontButtons = fontSection.querySelectorAll('button');
const texts = document.querySelectorAll('.content');

fontButtons.forEach(fontButtonFunction => {
    
        fontButtonFunction.addEventListener('click', (event) => {

        const fontColor = event.target.innerText;
        localStorage.setItem('cor', fontColor);
        const FontColorStorage = localStorage.getItem('cor');

        texts.forEach(text => {
            text.style.color = FontColorStorage;
        });
    });
});

//requisito 3 -----------------------------------------------------------
const fontSize = document.querySelector('#font-size');
const fontSizeButtons = fontSize.querySelectorAll('button');

fontSizeButtons.forEach(sizeButton => {

    sizeButton.addEventListener('click', (event) => {
        const chosenSize = event.target.innerText;
        localStorage.setItem('tamanho', chosenSize);
        const newFontSize = localStorage.getItem('tamanho');

        texts.forEach(text => {
            text.style.fontSize = newFontSize;
        });
    });
});

//requisito 4 -----------------------------------------------------------
const spaceFontTitle = document.querySelector('#line-height');
const spaceFontButtons = spaceFontTitle.querySelectorAll('button');

spaceFontButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const spaceFontChosen = event.target.innerText;
        localStorage.setItem('espacamento', spaceFontChosen);
        const fontSpace = localStorage.getItem('espacamento');
        
        texts.forEach(text => {
            text.style.lineHeight = fontSpace;
        });
    });
});

//requisito 5 -----------------------------------------------------------
const fontTypeTitle = document.querySelector('#font-family');
const fontTypeButtons = fontTypeTitle.querySelectorAll('button');

fontTypeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const typeFontChosen = event.target.innerText;
        localStorage.setItem('typeFont', typeFontChosen);
        const fontType = localStorage.getItem('typeFont');
        
        texts.forEach(text => {
            text.style.fontFamily = fontType;
        });
    });
});