function swap(a, aIndex, b, bIndex) {
    var temp = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
}
var a = ['test', '123'];
var b = ['a', 'b', 'c'];
swap(a, 0, b, 2);
console.log(a);
console.log(b);
