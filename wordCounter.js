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
        // console.log("Word not found!");
    }else {
        // console.log(`Word Found! the string contains ${num} ${word}`);
        
    }
    
}

// doesItContain("i love to eat potatoes because potaoes are so tasty lol", "tasty");

//---How many sentences? ------------

function countSentences(str) {
    var num = 0;
    var text = str.trim().split(".");
    if (text[text.length-1] == "") {
        // console.log(text.length - 1);
    }else {
        // console.log(text.length);
    }
}    

// countSentences("i love you. my dear friend. i would love to eat you someday.");

