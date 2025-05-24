function convertArrays(words) {
    var text = words.join('');
    return [
        text,
        text.length
    ];
}
console.log(convertArrays(['How', 'are', 'you?']));
