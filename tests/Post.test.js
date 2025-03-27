const axios = require('axios');
const { faker } = require('@faker-js/faker');
const PostController = require('../controllers/PostController');

jest.mock('axios');

describe('PostController API Tests', () => {
    
    let postController;

    beforeEach(() => {
        postController = new PostController();
    });

    test('getAllPosts() should return the full response', async () => {
        const mockResponse = { status: 200, data: [{ id: faker.number.int(), title: faker.lorem.sentence() }] };
        axios.get.mockResolvedValue(mockResponse);

        const response = await postController.getAllPosts();
        expect(response).toEqual(mockResponse);
    });

    test('getPostById() should return the full response', async () => {
        const postId = faker.number.int();
        const mockResponse = { status: 200, data: { id: postId, title: faker.lorem.sentence() } };
        axios.get.mockResolvedValue(mockResponse);

        const response = await postController.getPostById(postId);
        expect(response).toEqual(mockResponse);
    });

    test('createPost() should return the full response', async () => {
        const newPost = { title: faker.lorem.sentence(), body: faker.lorem.paragraph() };
        const mockResponse = { status: 201, data: { id: faker.number.int(), ...newPost } };
        axios.post.mockResolvedValue(mockResponse);

        const response = await postController.createPost(newPost);
        expect(response).toEqual(mockResponse);
    });

    test('updatePost() should return the full response', async () => {
        const postId = faker.number.int();
        const updatedPost = { title: faker.lorem.sentence(), body: faker.lorem.paragraph() };
        const mockResponse = { status: 200, data: { id: postId, ...updatedPost } };
        axios.put.mockResolvedValue(mockResponse);

        const response = await postController.updatePost(postId, updatedPost);
        expect(response).toEqual(mockResponse);
    });

    test('deletePost() should return the full response', async () => {
        const postId = faker.number.int();
        const mockResponse = { status: 200 };
        axios.delete.mockResolvedValue(mockResponse);

        const response = await postController.deletePost(postId);
        expect(response).toEqual(mockResponse);
    });

});
