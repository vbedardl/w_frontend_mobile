# Mobile App for Residents (Walter)

The Mobile App allows the resident to login into his account, update his user information and see his package history.

### How it works

The Web Admin Panel was built using expo, react-native. It is connected to a Graphql/Prisma server using Apollo/Client.

### Screenshots

![Login Page](https://github.com/vbedardl/w_frontend_mobile/blob/master/doc/w_login.jpg?raw=true)
![Package History Page](https://github.com/vbedardl/w_frontend_mobile/blob/master/doc/w_package_history.jpg?raw=true)
![USer Settings Page](https://github.com/vbedardl/w_frontend_mobile/blob/master/doc/w_user_settings.jpg?raw=true)

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
