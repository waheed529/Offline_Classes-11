let array = ['ZERO' , 'ONE' , 'TWO' , 'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];
let convertWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++) {
        let digit = Number.parseInt(str.charAt(i));
        tempStr += `${array[digit]} `;
    }
    return tempStr;
};

// Get the HTML elements
let numberBox = document.querySelector('#number');
let textMessage = document.querySelector('#text-number');

numberBox.addEventListener('keyup',function() {
   textMessage.innerText = convertWordNumber(numberBox.value);
});

