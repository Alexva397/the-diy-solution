export default {
    googleLogin: function () {
        window.open("http://localhost:3001/api/user/auth/google", "_self");
    },
    facebookLogin: function () {
        window.open("http://localhost:3001/api/user/auth/facebook", "_self");
    },
    twitterLogin: function () {
        window.open("http://localhost:3001/api/user/auth/twitter", "_self");
    },
};