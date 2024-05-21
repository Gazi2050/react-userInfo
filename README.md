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

## Contributing

We welcome contributions to the react-userInfo project! If you're interested in contributing, here's how you can get started:

1. **Fork the Repository:** Start by forking the react-userInfo repository to your own GitHub account.

2. **Clone the Repository:** Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Gazi2050/react-userInfo.git
   ```

3. **Create a New Branch:** Create a new branch for your contributions using a descriptive name:

   ```bash
   git checkout -b feature/new-feature
   ```

4. **Make Changes:** Make your desired changes to the codebase. Ensure that your changes adhere to the coding standards and guidelines of the project.

5. **Test Your Changes:** Test your changes thoroughly to ensure that they work as expected and do not introduce any regressions.

6. **Commit Your Changes:** Once you're satisfied with your changes, commit them to your branch with descriptive commit messages:

   ```bash
   git commit -m "Add new feature: Description of the feature"
   ```

7. **Push Changes:** Push your changes to your forked repository:

   ```bash
   git push origin feature/new-feature
   ```

8. **Submit a Pull Request:** Finally, submit a pull request from your branch to the main repository's main branch. Be sure to provide a detailed description of your changes and any related issues or pull requests.

We appreciate your contributions to making react-userInfo even better!

--- 
