/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import axios from "axios";

export default {
    getProjects: function () {
        return axios.get("/api/projects/");
    },
    getProject: function (id) {
        return axios.get("/api/projects/" + id);
    },
    saveProject: function (projectData) {
        return axios.post("/api/projects", projectData);
    },
    registerUser: function (userData) {
        return axios.post("/api/user/register", userData);
    },
    loginUser: function () {
        return axios.post("/api/user/login", {username, password});
    },

};