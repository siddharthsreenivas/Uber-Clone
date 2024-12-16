# Backend API Documentation

## `/users/register` Endpoint

### Description

Register a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and includes the following fields:

- `fullname` (object):
    - `firstname` (string, required): User's first name (minimum 3 characters).
    - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
    - `fullname` (object):
        - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).
    - `password` (string): User's password (minimum 6 characters).
- `token` (string): JWT token

## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon success.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and includes the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
    - `fullname` (object):
        - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).
    - `password` (string): User's password (minimum 6 characters).
- `token` (string): JWT token

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated users.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or in the cookies

`Authorization: Bearer <token>`

### Example Response

- `fullname` (object):
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
- `email` (string): User's email address (must be a valid email).

## `/users/logout` Endpoint

### Description

Logouts the current user and blacklist the token provided in the headers or cookies.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or in the cookies

`Authorization: Bearer <token>`

## `/captains/register` Endpoint

### Description

Register a new captain by creating a captain account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and includes the following fields:

- `fullname` (object):
    - `firstname` (string, required): User's first name (minimum 3 characters).
    - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).
- `vehicle` (object):
    - `color` (string, required): Vehicle color (minimum 3 characters).
    - `plate` (string, required): Vehicle plate number (minimum 3 characters).
    - `capacity` (number, required): Vehicle passenger capacity (minimum 1).
    - `vehicleType` (string, required): Type of vehicle (must be 'car','motorcycle' or 'auto').

### Example Response

- `captain` (object):
    - `fullname` (object):
        - `firstname` (string): User's first name
        - `lastname` (string): User's last name
    - `email` (string): User's email address
    - `password` (string): User's password
    - `vehicle` (object):
        - `color` (string): Vehicle color
        - `plate` (string): Vehicle plate number
        - `capacity` (number): Vehicle passenger capacity 
        - `vehicleType` (string): Type of vehicle
- `token` (string): JWT token