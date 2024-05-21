# react-userInfo

Generate random user data for React web apps with this lightweight package, streamlining development and testing with realistic placeholders for usernames, passwords, and profile pictures.

## Installation

You can install this package via npm:

```bash
npm install react-userinfo
```

## Demo
[Demo1](https://react-userinfo-demo1.surge.sh)

## Function Details

### `generateUserName()`

Generates a random username using a combination of adjectives, nouns, and a random number.

- **Returns**: `string` - The generated username.

### `generatePassword()`

Generates a random password with a length of 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.

- **Returns**: `string` - The generated password.

### `generateProfilePic()`

Generates a random profile picture URL with colorful geometric shapes.

- **Returns**: `string` - The URL of the generated profile picture.


## Usage

### Importing Functions

Import the functions you need from the package:

```javascript
import { generateUserName, generatePassword, generateProfilePic } from 'user-data-generator-react';
```

### Generating User Data

#### Generate Username

To generate a username, call the `generateUserName` function:

```jsx
// Example usage in a React component

import { generateUserName } from 'react-userinfo';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');

  function handleGenerateUserName(e) {
    e.preventDefault();
    setUserName(generateUserName());
  }

  return (
    <div>
      <h1>Generate Username :</h1>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleGenerateUserName}>Generate</button>
    </div>
  );
}

export default App;

```

#### Generate Password

To generate a password, call the `generatePassword` function:

```jsx
// Example usage in a React component

import { generatePassword } from 'react-userinfo';
import { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');

  function handleGeneratePassword(e) {
    e.preventDefault();
    setPassword(generatePassword());
  }

  return (
    <div>
      <h1>Generate Password :</h1>
      <input
        type='password'
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleGeneratePassword}>Generate</button>
    </div>
  );
}

export default App;

```

#### Generate Profile Picture

To generate a profile picture URL, call the `generateProfilePic` function:

```jsx
// Example usage in a React component

import { generateProfilePic } from 'react-userinfo';
import { useState } from 'react';

function App() {
  const [profilePicUrl, setProfilePicUrl] = useState('');

  function handleGenerateProfilePic(e) {
    e.preventDefault();
    setProfilePicUrl(generateProfilePic());
  }

  return (
    <div>
      <h1>Generate Profile Picture :</h1>
      <div>
        <img src={profilePicUrl} alt="Profile" />
      </div>
      <div>
        <button onClick={handleGenerateProfilePic}>Generate</button>
      </div>
    </div>
  );
}

export default App;

```

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

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
