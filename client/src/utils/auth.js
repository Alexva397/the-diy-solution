export default {
    googleLogin: function () {
        window.open("https://warm-caverns-74106.herokuapp.com/api/user/auth/google" || "http://localhost:3001/api/user/auth/google", "_self");
    },
    facebookLogin: function () {
        window.open("https://warm-caverns-74106.herokuapp.com/api/user/auth/facebook" || "http://localhost:3001/api/user/auth/facebook", "_self");
    },
    twitterLogin: function () {
        window.open("https://warm-caverns-74106.herokuapp.com/api/user/auth/twitter" || "http://localhost:3001/api/user/auth/twitter", "_self");
    },
};