function multiply(param1, param2, param3) {
    var num1 = param1 == undefined ? 1 : Number(param1);
    var num2 = param2 == undefined ? 1 : Number(param2);
    var num3 = param3 == undefined ? 1 : Number(param3);
    return num1 * num2 * num3;
}
console.log(multiply('3', 5, '10'));
console.log(multiply('2', '2'));
console.log(multiply(undefined, 2, 3));
