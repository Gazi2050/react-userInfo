// Username generator function
export function generateUserName(): string {
    const adjectives = ['Happy', 'Clever', 'Brave', 'Gentle', 'Funny'];
    const nouns = ['Lion', 'Tiger', 'Bear', 'Eagle', 'Wolf'];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(Math.random() * 999) + 1; // Random number between 1 and 999 (1 to 3 digits)
    return `@${adjective}${noun}${number}`;
}

// Password generator function
export function generatePassword(): string {
    const length = 8;
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '@#$%&+?';

    const allChars = upperCaseChars + lowerCaseChars + digitChars + specialChars;

    let password = '';
    password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    password += digitChars[Math.floor(Math.random() * digitChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return password.split('').sort(() => Math.random() - 0.5).join('');
}

// Profile picture generator function
export function generateProfilePic(): string {
    try {
        // Define available colors
        const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF', '#FF33FF'];

        // Define available shapes
        const shapes = ['circle', 'square', 'triangle'];

        // Create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            throw new Error('Canvas context not supported');
        }

        // Set canvas size
        canvas.width = 200;
        canvas.height = 200;

        // Generate random shapes
        const numShapes = Math.floor(Math.random() * 5) + 3; // Random number of shapes between 3 and 7
        for (let i = 0; i < numShapes; i++) {
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 50 + 50; // Random size between 50 and 100

            // Draw shapes
            ctx.fillStyle = color;
            switch (shape) {
                case 'circle':
                    ctx.beginPath();
                    ctx.arc(Math.random() * 200, Math.random() * 200, size / 2, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 'square':
                    ctx.fillRect(Math.random() * (200 - size), Math.random() * (200 - size), size, size);
                    break;
                case 'triangle':
                    ctx.beginPath();
                    const x1 = Math.random() * 200;
                    const y1 = Math.random() * 200;
                    ctx.moveTo(x1, y1);
                    const x2 = x1 + size * Math.cos(Math.random() * 2 * Math.PI);
                    const y2 = y1 + size * Math.sin(Math.random() * 2 * Math.PI);
                    const x3 = x1 + size * Math.cos(Math.random() * 2 * Math.PI);
                    const y3 = y1 + size * Math.sin(Math.random() * 2 * Math.PI);
                    ctx.lineTo(x2, y2);
                    ctx.lineTo(x3, y3);
                    ctx.closePath();
                    ctx.fill();
                    break;
            }
        }

        // Convert canvas to base64 data URL
        const dataUrl = canvas.toDataURL('image/png');

        return dataUrl;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error generating profile picture:', error.message);
        } else {
            console.error('Unknown error generating profile picture');
        }
        return ''; // Return an empty string in case of error
    }
}
