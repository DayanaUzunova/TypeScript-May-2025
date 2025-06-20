function isUser(user) {
    return user != undefined && typeof user === 'object' &&
        'id' in user && ((typeof user.id === 'number' && user.id > 100) || (typeof user.id === 'string' && user.id.length === 14))
        && 'username' in user && (typeof user.username === 'string' && user.username.length >= 5 && user.username.length <= 10) &&
        'passwordHash' in user && ((typeof user.passwordHash === 'string' && user.passwordHash.length === 20) ||
        (Array.isArray(user.passwordHash) && user.passwordHash.every(function (x) { return typeof x === 'string' && x.length === 8; }))) &&
        'status' in user && typeof user.status === 'string' && ['Locked', 'Unlocked'].includes(user.status);
}
var user = { id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' };
var user2 = { id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' };
var user3 = { id: '20', username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' };
console.log(isUser(user));
console.log(isUser(user2));
console.log(isUser(user3));
