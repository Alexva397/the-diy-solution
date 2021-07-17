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
    updateProject: function (id, projectData) {
        return axios.put("/api/projects/" + id, projectData);
    },
    saveProject: function (projectData) {
        return axios.post("/api/projects", projectData);
    },
    registerUser: function (userData) {
        return axios.post("/api/user/register", userData);
    },
    loginUser: function () {
        return axios.post("/api/user/login", { username, password });
    },
    logoutUser: function () {
        return axios.get("/api/user/logout");
    }
};