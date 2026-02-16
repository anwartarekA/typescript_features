// annotaions around functions
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 30));
// type infernce around function
var subtract = function (a, b) { return a - b; };
console.log(subtract(10, 5));
// annotations around anonemous function
function devide(a, b) {
    return a / b;
}
console.log(devide(10, 5));
// void and never
var logger = function (msg) {
    console.log(msg);
};
var error = function (msg) {
    throw new Error(msg);
};
var todaysWeather = {
    date: new Date(),
    today: 'sunny',
};
var weather = function (forecast) {
    console.log(forecast.date);
    console.log(forecast.today);
};
weather(todaysWeather);
// destructuring
var weather2 = function (_a) {
    var date = _a.date, today = _a.today;
    console.log(date);
    console.log(today);
};
weather2(todaysWeather);
