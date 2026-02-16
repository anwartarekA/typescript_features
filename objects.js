var profile = {
    user: 'anwar',
    age: 24,
    coords: {
        lat: 10,
        lng: 20,
    },
    setAge: function (age) {
        this.age = age;
    },
};
// annotations around object destruction
var user = profile.user, age = profile.age;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
console.log(lat, lng);
