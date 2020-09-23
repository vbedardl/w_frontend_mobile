# Mobile App for Residents (Walter)

The Mobile App allows the resident to login into his account, update his user information and see his package history.

### How it works

The Web Admin Panel was built using expo, react-native. It is connected to a Graphql/Prisma server using Apollo/Client.

### Screenshots

![User Management Tab](https://github.com/vbedardl/w_frontend_web/blob/master/doc/UserManagement.gif?raw=true)
![Package Management Tab](https://github.com/vbedardl/w_frontend_web/blob/master/doc/W_Package_Management.gif?raw=true)

## Getting Started

- Install all dependencies using `npm install` command
- Clone the w_backend from https://github.com/vbedardl/w_backend and run the development server using `npm start`
- On a separate terminal, run development build using `npm start` from project root folder

## Current Functionality

- Login as a user
- Update a user information (email and password, for now)

- Get a list of his packages

## Further Development

- Add notification when new package is created
- Using a navigator for view navigation instead of state
- Using JWT authentication. Need to figure out where to store the token.
