# Api Testing on JsonPlaceHolder with Jest

This project provides unit tests for API endpoints using **Jest**, **Axios**, and **Faker**. It includes test suites for both **PostController** and **UserController**, which interact with a public API (https://jsonplaceholder.typicode.com).

## Features
- Full **CRUD lifecycle** testing for **posts** and **users**
- Uses **Jest** for testing
- Uses **Axios** for API requests
- Uses **Faker** for generating dynamic test data
- Generates **HTML test reports**

## Installation
```sh
# Clone the repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Install dependencies
npm install
```

## Project Structure
```
📂 project-root
 ├── 📂 controllers
 │   ├── PostController.js
 │   ├── UserController.js
 │
 ├── 📂 test
 │   ├── Post.test.js
 │   ├── User.test.js
 │
 ├── package.json
 ├── README.md
```
## Install Dependencies
```sh
npm install
```

## Run Tests
```sh
npm test
```

## Generate HTML Test Report
```sh
npx jest --reporters=default --reporters=jest-html-reporter
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
![image](https://github.com/user-attachments/assets/69800fba-605a-4088-9f9d-28a917e3fe5d)

## License
This project is licensed under the **MIT License**.
