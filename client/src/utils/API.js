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
    deleteProject: function (id) {
        return axios.delete("/api/projects/" + id);
    },
    registerUser: function (userData) {
        return axios.post("/api/user/register", userData);
    },
    logoutUser: function () {
        return axios.get("/api/user/logout");
    }

};