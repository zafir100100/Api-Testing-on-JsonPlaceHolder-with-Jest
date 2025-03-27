const axios = require('axios');

class UserController {
    constructor() {
        this.API_URL = 'https://jsonplaceholder.typicode.com/users';
    }

    async getAllUsers() {
        return axios.get(this.API_URL);
    }

    async getUserById(id) {
        return axios.get(`${this.API_URL}/${id}`);
    }

    async createUser(data) {
        return axios.post(this.API_URL, data);
    }

    async updateUser(id, data) {
        return axios.put(`${this.API_URL}/${id}`, data);
    }

    async deleteUser(id) {
        return axios.delete(`${this.API_URL}/${id}`);
    }
}

module.exports = UserController;
