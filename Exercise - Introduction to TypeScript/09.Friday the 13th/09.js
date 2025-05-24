function friday13(arr) {
    var Months;
    (function (Months) {
        Months[Months["January"] = 0] = "January";
        Months[Months["February"] = 1] = "February";
        Months[Months["March"] = 2] = "March";
        Months[Months["April"] = 3] = "April";
        Months[Months["May"] = 4] = "May";
        Months[Months["June"] = 5] = "June";
        Months[Months["July"] = 6] = "July";
        Months[Months["August"] = 7] = "August";
        Months[Months["September"] = 8] = "September";
        Months[Months["October"] = 9] = "October";
        Months[Months["November"] = 10] = "November";
        Months[Months["December"] = 11] = "December";
    })(Months || (Months = {}));
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var date = arr_1[_i];
        if (date instanceof Date) {
            var monthDay = date.getDate();
            var weeklyDay = date.getDay();
            var monthNum = date.getMonth();
            if (monthDay === 13 && weeklyDay === 5) {
                console.log("".concat(monthDay, "-").concat(Months[monthNum], "-").concat(date.getFullYear()));
            }
        }
    }
}
// friday13([
//     {},
//     new Date(2025, 4, 13),
//     null,
//     new Date(2025, 5, 13),
//     '13-09-2023',
//     new Date(2025, 6, 13),
// ]
// )
friday13([
    new Date(2024, 0, 13),
    new Date(2024, 1, 13),
    new Date(2024, 2, 13),
    new Date(2024, 3, 13),
    new Date(2024, 4, 13),
    new Date(2024, 5, 13),
    new Date(2024, 6, 13),
    new Date(2024, 7, 13),
    new Date(2024, 8, 13),
    new Date(2024, 9, 13),
    new Date(2024, 10, 13),
    new Date(2024, 11, 13)
]);
