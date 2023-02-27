const MORSE_TABLE = {
    '**********': ' ',
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const onesZeros = [];

    //Длина каждой закодированной буквы равна 10, перебираем и выщемляем "буквы"
    for (let i = 0; i < expr.length; i += 10) {
        onesZeros.push(expr.slice(i, i + 10));
    }

    return onesZeros.reduce((result, elem) => { //обратно схлопываем выщемление в итог
        const code = elem.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g,''); //по пути создав по эл-там новую конст из 11/10 по Морзе
        return result += MORSE_TABLE[code];
    }, '');
};

module.exports = {
    decode
};