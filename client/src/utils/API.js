/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import axios from "axios";

export default {
    getProjects: function () {
        return axios.get("/api/projects/");
    },
    getProject: function (id) {
        return axios.get("/api/project/" + id);
    },
    saveProject: function (projectData) {
        return axios.post("/api/project", projectData);
    },
    registerUser: function (userData) {
        return axios.post("/api/user/register", userData);
    },
    loginUser: function () {
        return axios.post("/api/user/login");
    },
    
};