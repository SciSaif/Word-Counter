const loader = document.querySelector('.loader');
const saif = document.querySelector('.saif');
const container = document.querySelector('.container');
const textarea = document.querySelector('textarea');
const enter = document.querySelector('.enter');
const clear = document.querySelector('.clear');
const numOfWords = document.querySelector('.num-of-words');
const numOfLetters = document.querySelector('.num-of-letters');
const numOfSentences = document.querySelector('.num-of-sentences');
const numOfSpaces = document.querySelector('.num-of-spaces');
const number = document.querySelector('.number');
const findNumBtn = document.querySelector('.find-num');
const numOfXLetterWords = document.querySelector('.num-of-x-letter-words');
const displayResult1 = document.querySelector('.display-result1');

const copy = document.querySelector('.copy');
const replace = document.querySelector('.replace');
const displayReplace = document.querySelector('.display-replace');
const displayReplaceAns = document.querySelector('.display-replace-answer');
const findWordInput = document.querySelector('.find-word-input');
const replaceWordInput = document.querySelector('.replace-word-input');
const findWord = document.querySelector('.find-word');
const replaceWord = document.querySelector('.Replace-word');
const replaceFindAns = document.querySelector('.replace-find-answer');
const back = document.querySelector('.back');



//---Count words------------

function countWords(str) {
    var text = str.trim().split(" ");
    return text.length;
}

// console.log(countWords("i love eating potatoes"));

//---count letters or spaces-----------

function countLetters(str, which) {
    var num = 0;
    var text = Array.from(str);
    text.forEach(elem => {
        if (elem == " ") {
            num++;
        }else return;
    });
    if (which == "number of letters") {
        return text.length - num;
    }else if (which == "number of spaces") {
        return num;
    }
}

// console.log(countLetters("i love eating potatoes", "number of spaces"));

//---count Number of x many letter words-----------

function countNumOfXLetterWords(str, x) {
    var num = 0;
    var text = str.trim().split(" ");
    text.forEach(elem => {
        if (elem.length == x) {
            num++;
        }else return;
    });
    return num;
}

// console.log(countNumOfXLetterWords("i love to eat food which is made in india pota", 4));

//--- Does it contain?------------

function doesItContain(str, word) {
    var num = 0;
    var text = str.trim().split(" ");
    text.forEach(elem => {
        if (elem == word) {
            num++;
        }else return;
    });
    
    if (num == 0) {
        return "Word Not Found! :(";
    }else {
        return `Word Found! :) <br> There are ${num} such words in the text`;
        
    }
    
}

// doesItContain("i love to eat potatoes because potaoes are so tasty lol", "tasty");

//---How many sentences? ------------

function countSentences(str) {
    var num = 0;
    var text = str.trim().split(".");
    if (text[text.length-1] == "") {
        return text.length - 1;
    }else {
        return text.length;
    }
}    

// countSentences("i love you. my dear friend. i would love to eat you someday.");


// now using the functions in the website---------------------------------

setTimeout(function(){
    loader.classList.add('invisible');
    saif.classList.remove('invisible');
    setTimeout(function(){
        saif.classList.add('invisible');
        container.classList.remove('invisible');
       }, 3000);
   }, 3000);


// when enter is clicked
enter.addEventListener('click', displayResults);
function displayResults() {
    const textVal = textarea.value;
    numOfWords.innerHTML = countWords(textVal);
    numOfLetters.innerHTML = countLetters(textVal, "number of letters");
    numOfSentences.innerHTML = countSentences(textVal);
    numOfSpaces.innerHTML = countLetters(textVal, "number of spaces");

}

findNumBtn.addEventListener('click', () => {
    const textVal = textarea.value;
    const num = number.value;
    const ans = countNumOfXLetterWords(textVal, num);
    numOfXLetterWords.innerHTML = ans;
})

//when clear is clicked

clear.addEventListener('click', () => {
    textarea.value = '';
})

//when copy is clicked

copy.addEventListener('click', () =>{
    textarea.select();
    textarea.focus();
    document.execCommand("copy");
});

//when replace is clicked

function findReplace() {
    displayResult1.classList.toggle('invisible2');
    displayReplace.classList.toggle('invisible2');
}

replace.addEventListener('click', findReplace);

function findword(str, word) {
    var num = 0;
    str.forEach(elem => {
        if (elem.includes(word.toLowerCase())) {
            num ++;
        }else return;
    });
    if (num) {
        return `${num} such words found!`;
    }else {
        return `No such word found!`;
    }
}

findWord.addEventListener('click', () => {
    displayReplace.classList.add('invisible2');
    displayReplaceAns.classList.remove('invisible2');
    var word = findWordInput.value, num= 0;
    var textVal = textarea.value.trim().split(" ");
    replaceFindAns.innerHTML = findword(textVal, word);
    setTimeout(function(){
        displayReplace.classList.remove('invisible2');
        displayReplaceAns.classList.add('invisible2');
    },3000)
});

function replaceword(str, wordToReplace, wordToReplaceBy) {
    var newStr = "";
    str.forEach(elem => {
        if (elem.includes(wordToReplace)) {
            newStr += wordToReplaceBy + " ";
        }else {
            newStr += elem + " ";
        }
    });
    return newStr;
}

replaceWord.addEventListener('click', () => {
    displayReplace.classList.add('invisible2');
    displayReplaceAns.classList.remove('invisible2');
    var wordToReplace = findWordInput.value;
    var wordToReplaceBy = replaceWordInput.value;
    var textVal = textarea.value.trim().split(" ");
    textarea.value = replaceword(textVal, wordToReplace, wordToReplaceBy);
    replaceFindAns.innerHTML = "All words Replaced";
    setTimeout(function(){
        displayReplace.classList.remove('invisible2');
        displayReplaceAns.classList.add('invisible2');
    },3000)
});

//when back is clicked 
back.addEventListener('click', () => {
    displayReplace.classList.add('invisible2');
    displayResult1.classList.remove('invisible2');
})