# react-userInfo

Generate random user data for React web apps with this lightweight package, streamlining development and testing with realistic placeholders for usernames, passwords, and profile pictures.

## Installation

You can install this package via npm:

```bash
npm install react-userinfo
```

## Usage

### Importing Functions

Import the functions you need from the package:

```javascript
import { generateUserName, generatePassword, generateProfilePic } from 'user-data-generator-react';
```

### Generating User Data

#### Generate Username

To generate a username, call the `generateUserName` function:

```javascript
const username = generateUserName();
console.log("Username:", username);
```

#### Generate Password

To generate a password, call the `generatePassword` function:

```javascript
const password = generatePassword();
console.log("Password:", password);
```

#### Generate Profile Picture

To generate a profile picture URL, call the `generateProfilePic` function:

```javascript
const profilePic = generateProfilePic();
console.log("Profile Picture:", profilePic);
```

## Function Details

### `generateUserName()`

Generates a random username.

- **Returns**: `string` - The generated username.

### `generatePassword()`

Generates a random password.

- **Returns**: `string` - The generated password.

### `generateProfilePic()`

Generates a random profile picture URL.

- **Returns**: `string` - The URL of the generated profile picture.

## Example

Here's an example of generating user data:

```javascript
import { generateUserName, generatePassword, generateProfilePic } from 'user-data-generator-react';

const username = generateUserName();
const password = generatePassword();
const profilePic = generateProfilePic();

console.log("Username:", username);
console.log("Password:", password);
console.log("Profile Picture:", profilePic);
```

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any parts of the documentation to better fit your needs or preferences!