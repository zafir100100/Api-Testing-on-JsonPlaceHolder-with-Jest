# Api Testing on JsonPlaceHolder with Jest 

This project provides unit tests for API endpoints using **Jest**, **Axios**, and **Faker**. It includes test suites for both **PostController** and **UserController**, which interact with a public API (https://jsonplaceholder.typicode.com).

## Video

https://github.com/user-attachments/assets/28fcd228-3b74-4824-85a3-bd892fabf8d4

## How to run this project
```sh
# Clone this project

# Install dependencies
npm install

# Run tests:
npm run test
```

## Test Scenarios
### PostController
1. **Get All Posts** - Verify that all posts are fetched correctly.
2. **Get Post By ID** - Verify that a specific post is retrieved successfully.
3. **Create a Post** - Ensure that a new post is created successfully.
4. **Update a Post** - Verify that an existing post is updated correctly.
5. **Delete a Post** - Ensure that a post is deleted successfully.

### UserController
1. **Get All Users** - Verify that all users are fetched correctly.
2. **Get User By ID** - Verify that a specific user is retrieved successfully.
3. **Create a User** - Ensure that a new user is created successfully.
4. **Update a User** - Verify that an existing user is updated correctly.
5. **Delete a User** - Ensure that a user is deleted successfully.

## Dependencies
```json
"devDependencies": {
  "@faker-js/faker": "^9.6.0",
  "axios": "^1.8.4",
  "jest": "^29.7.0",
  "jest-html-reporter": "^4.1.0"
}
```

## Screenshot (Report)

![image](https://github.com/user-attachments/assets/7d66a077-0197-42d6-bcf2-46d06f167377)

