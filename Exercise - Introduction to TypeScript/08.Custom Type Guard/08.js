function isNonEmptyStringArray(arg) {
    return Array.isArray(arg) && arg.length >= 1 && arg.every(function (el) { return typeof el === 'string'; });
}
var arr = ['test', '123'];
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length);
}
