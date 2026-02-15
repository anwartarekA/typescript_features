var user = 'anwar';
var num = 10;
var has = true;
var nothingMatch = null;
var nothing = undefined;
var now = new Date();
now.getMonth();
var Color = /** @class */ (function () {
    function Color() {
    }
    return Color;
}());
var red = new Color();
var strings = ['red', 'green', 'blue'];
var numbers = [1, 2, 3];
var booleans = [true, true, false];
// annotations around object letiral
var position = {
    x: 10,
    y: 20,
};
console.log(strings);
// annotations around functions
var logNumber = function (i) {
    console.log(i);
};
logNumber(100);
