var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (newUsername) {
            if (newUsername.length < 3) {
                throw new Error('Username must be at least 3 characters!');
            }
            this._username = newUsername;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);
