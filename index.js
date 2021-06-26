function shout(string) {
    return string.toUpperCase(); //'HELLO!'
}

function whisper(string) {
    return string.toLowerCase(); //'hello'
}    

function logShout(string) {
    console.log(string.toUpperCase()); //'HELLO!'
} 

function logWhisper(string) {
    console.log(string.toLowerCase()); //'hello'
} 


function sayHiToGrandma(string) {
    const input=string
    if (input===string.toLowerCase())
    return "I can\'t hear you!";

    if (input===string.toUpperCase())
    return "YES INDEED!";

    if (input==="I love you, Grandma.")
        return 'I love you, too.';
}


// sayHiToGrandma ('hello');
// sayHiToGrandma ('HELLO');
//  sayHiToGrandma ('I love you, Grandma.');
    