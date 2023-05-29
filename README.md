# blog-api-nodejs

The repository is designed to use MongoDB. 
Functionality has been tested with Insomnia.
Data files uploaded from MongoDB: 
/simple_blog/posts.json, 
/simple_blog/users.json


__*Endpoints*__

POST `/register` registration with a check if such a user already exists

POST `/login` search & verification (comparing) of registered users
__

GET `/getAll` find all posts

GET `/find/:id` find post by ID

POST `/create` create new post by a registered user

PUT `/updateBlog/:id` updating (changing) a post by a registered user

DELETE `/deleteBlog/:id` deleting a post by a registered user
__

GET `/find/:userId` find user by ID

GET `/findAll` find all users

PUT `/updateUser/:userId` user data change

DELETE `/deleteUser/:userId` deleting a user
__

POST `/upload` to upload content by the user