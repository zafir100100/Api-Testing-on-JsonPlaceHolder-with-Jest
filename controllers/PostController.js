const axios = require('axios');

class PostController {
    
    constructor() {
        this.API_URL = 'https://jsonplaceholder.typicode.com/posts';
    }

    async getAllPosts() {
        return await axios.get(this.API_URL);
    }

    async getPostById(id) {
        return await axios.get(`${this.API_URL}/${id}`);
    }

    async createPost(data) {
        return await axios.post(this.API_URL, data);
    }

    async updatePost(id, data) {
        return await axios.put(`${this.API_URL}/${id}`, data);
    }

    async deletePost(id) {
        return await axios.delete(`${this.API_URL}/${id}`);
    }
}

module.exports = PostController;
