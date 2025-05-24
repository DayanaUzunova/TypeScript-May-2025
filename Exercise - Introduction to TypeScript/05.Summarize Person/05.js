function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    var fullName = middleName ? "".concat(firstName, " ").concat(middleName, " ").concat(lastName) : "".concat(firstName, " ").concat(lastName);
    var hobbiesStr = hobbies ? hobbies.join(', ') : '-';
    var workInfoStr = workInfo ? "".concat(workInfo[0], " -> ").concat(workInfo[1]) : '-';
    return [
        id,
        fullName,
        age,
        hobbiesStr,
        workInfoStr
    ];
}
//console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));
