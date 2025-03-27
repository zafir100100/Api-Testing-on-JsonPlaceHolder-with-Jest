const axios = require('axios');
const { faker } = require('@faker-js/faker');
const UserController = require('../controllers/UserController');

jest.mock('axios');

describe('UserController API Tests', () => {
    let userController;

    beforeEach(() => {
        userController = new UserController();
    });

    test('getAllUsers() should return the full response', async () => {
        const mockResponse = { status: 200, data: [{ id: faker.number.int(), name: faker.person.fullName() }] };
        axios.get.mockResolvedValue(mockResponse);

        const response = await userController.getAllUsers();
        expect(response).toEqual(mockResponse);
    });

    test('getUserById() should return the full response', async () => {
        const userId = faker.number.int();
        const mockResponse = { status: 200, data: { id: userId, name: faker.person.fullName() } };
        axios.get.mockResolvedValue(mockResponse);

        const response = await userController.getUserById(userId);
        expect(response).toEqual(mockResponse);
    });

    test('createUser() should return the full response', async () => {
        const newUser = { name: faker.person.fullName(), email: faker.internet.email() };
        const mockResponse = { status: 201, data: { id: faker.number.int(), ...newUser } };
        axios.post.mockResolvedValue(mockResponse);

        const response = await userController.createUser(newUser);
        expect(response).toEqual(mockResponse);
    });

    test('updateUser() should return the full response', async () => {
        const userId = faker.number.int();
        const updatedUser = { name: faker.person.fullName(), email: faker.internet.email() };
        const mockResponse = { status: 200, data: { id: userId, ...updatedUser } };
        axios.put.mockResolvedValue(mockResponse);

        const response = await userController.updateUser(userId, updatedUser);
        expect(response).toEqual(mockResponse);
    });

    test('deleteUser() should return the full response', async () => {
        const userId = faker.number.int();
        const mockResponse = { status: 200 };
        axios.delete.mockResolvedValue(mockResponse);

        const response = await userController.deleteUser(userId);
        expect(response).toEqual(mockResponse);
    });
});
