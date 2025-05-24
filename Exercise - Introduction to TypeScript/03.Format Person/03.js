function formatPerson(personInfo) {
    return "Hello, my name is ".concat(personInfo[0], " and my age is ").concat(personInfo[1]);
}
console.log(formatPerson(['Ivan', 20]));
