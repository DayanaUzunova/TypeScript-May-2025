var Task = /** @class */ (function () {
    function Task(title, description, createdBy) {
        this.completed = false;
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    Object.defineProperty(Task.prototype, "createdBy", {
        get: function () {
            return this._createdBy;
        },
        enumerable: false,
        configurable: true
    });
    Task.prototype.toggleStatus = function () {
        this.completed = !this.completed;
    };
    Task.prototype.getDetails = function () {
        return "Task ".concat(this.title, " - ").concat(this.description, " - ").concat(this.completed ? 'Completed!' : 'Pending');
    };
    Task.createSampleTasks = function () {
        return [
            new Task('Do Calc HW', 'Complete all 200 problems', 'Alex'),
            new Task('Clean room', 'sad', 'Pen4o')
        ];
    };
    return Task;
}());
var task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());
var task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());
