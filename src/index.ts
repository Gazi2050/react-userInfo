
// Helper function to get a random element from an array
function getRandomElement(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Username generator function
export function generateUserName(): string {
    const adjectives = [
        'Happy', 'Clever', 'Brave', 'Gentle', 'Funny', 'Strong', 'Quick',
        'Bright', 'Wise', 'Swift', 'Bold', 'Calm', 'Eager', 'Fancy', 'Glorious',
        'Jolly', 'Kind', 'Lively', 'Mighty', 'Noble', 'Proud', 'Silly', 'Valiant',
        'Witty', 'Zany', 'Adaptable', 'Adventurous', 'Affectionate', 'Ambitious',
        'Compassionate', 'Confident', 'Considerate', 'Courageous', 'Curious',
        'Daring', 'Decisive', 'Determined', 'Diligent', 'Diplomatic', 'Dynamic',
        'Empathetic', 'Energetic', 'Enthusiastic', 'Exuberant', 'Faithful',
        'Fearless', 'Flexible', 'Friendly', 'Generous', 'Genuine', 'Graceful',
        'Humble', 'Idealistic', 'Imaginative', 'Independent', 'Innovative',
        'Intelligent', 'Inventive', 'Loyal', 'Meticulous', 'Observant', 'Optimistic',
        'Passionate', 'Patient', 'Persistent', 'Philosophical', 'Playful', 'Practical',
        'Proactive', 'Rational', 'Reliable', 'Resourceful', 'Respectful', 'Self-reliant',
        'Sincere', 'Sociable', 'Supportive', 'Thoughtful', 'Trustworthy', 'Unassuming',
        'Understanding', 'Vibrant', 'Vivacious', 'Warm', 'Wholesome', 'Zealous'
    ];

    const nouns = [
        'Lion', 'Tiger', 'Bear', 'Eagle', 'Wolf', 'Fox', 'Hawk', 'Owl',
        'Shark', 'Whale', 'Panda', 'Koala', 'Leopard', 'Cheetah', 'Falcon',
        'Bison', 'Buffalo', 'Butterfly', 'Camel', 'Caribou', 'Chameleon', 'Cobra', 'Condor',
        'Coyote', 'Crane', 'Crocodile', 'Crow', 'Deer', 'Dingo', 'Dolphin', 'Dragon', 'Elephant',
        'Flamingo', 'Gazelle', 'Giraffe', 'Goat', 'Gorilla', 'Heron', 'Hippo', 'Horse', 'Hummingbird',
        'Iguana', 'Jaguar', 'Kangaroo', 'Kingfisher', 'Komodo', 'Lemur', 'Lynx', 'Magpie', 'Manatee',
        'Mongoose', 'Moose', 'Narwhal', 'Ocelot', 'Octopus', 'Orca', 'Ostrich', 'Otter', 'Panther',
        'Parrot', 'Peacock', 'Penguin', 'Platypus', 'Porcupine', 'Python', 'Raccoon', 'Raven', 'Rhino',
        'Robin', 'Seahorse', 'Seal', 'SnowyOwl', 'Sparrow', 'Squirrel', 'Stingray', 'Swan', 'Tapir',
        'TasmanianDevil', 'Toucan', 'Turtle', 'Vulture', 'Wallaby', 'Wolverine', 'Yak', 'Zebra'
    ];

    const adjective = getRandomElement(adjectives);
    const noun = getRandomElement(nouns);
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

    // Fill the rest of the password with random characters
    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password characters to ensure randomness
    return password.split('').sort(() => Math.random() - 0.5).join('');
}

// Profile picture generator function
export function generateProfilePic(): string {
    try {
        // Define available colors
        const colors = [
            '#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF', '#FF33FF', '#FF6347', '#4682B4',
            '#9ACD32', '#FF4500', '#6A5ACD', '#FFD700', '#ADFF2F', '#FF69B4', '#8A2BE2', '#FFB6C1',
            '#00FF7F', '#7B68EE', '#DAA520', '#32CD32', '#FF8C00', '#9932CC', '#00FA9A', '#FF1493',
            '#5F9EA0', '#FF00FF', '#FF6347', '#4682B4', '#9ACD32', '#FF4500', '#6A5ACD', '#FFD700',
            '#ADFF2F', '#FF69B4', '#8A2BE2', '#FFB6C1', '#00FF7F', '#7B68EE', '#DAA520', '#32CD32',
            '#FF8C00', '#9932CC', '#00FA9A', '#FF1493', '#5F9EA0', '#FF00FF', '#FF6347', '#4682B4',
            '#9ACD32', '#FF4500', '#6A5ACD', '#FFD700', '#ADFF2F', '#FF69B4', '#8A2BE2', '#FFB6C1',
            '#00FF7F', '#7B68EE', '#DAA520', '#32CD32', '#FF8C00', '#9932CC', '#00FA9A', '#FF1493',
            '#5F9EA0', '#FF00FF', '#FF6347', '#4682B4', '#9ACD32', '#FF4500', '#6A5ACD', '#FFD700',
            '#ADFF2F', '#FF69B4', '#8A2BE2', '#FFB6C1', '#00FF7F', '#7B68EE', '#DAA520', '#32CD32',
            '#FF8C00', '#9932CC', '#00FA9A', '#FF1493', '#5F9EA0', '#FF00FF', '#FF6347', '#4682B4',
            '#9ACD32', '#FF4500', '#6A5ACD', '#FFD700', '#ADFF2F', '#FF69B4', '#8A2BE2', '#FFB6C1'
        ];

        // Define available shapes
        const shapes = ['circle', 'square', 'triangle', 'rectangle', 'hexagon', 'pentagon', 'star'];

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
            const shape = getRandomElement(shapes);
            const color = getRandomElement(colors);
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
                    drawTriangle(ctx, Math.random() * 200, Math.random() * 200, size);
                    break;
                case 'rectangle':
                    const width = size;
                    const height = size / 2;
                    ctx.fillRect(Math.random() * (200 - width), Math.random() * (200 - height), width, height);
                    break;
                case 'hexagon':
                    drawPolygon(ctx, Math.random() * 200, Math.random() * 200, size / 2, 6);
                    break;
                case 'pentagon':
                    drawPolygon(ctx, Math.random() * 200, Math.random() * 200, size / 2, 5);
                    break;
                case 'star':
                    drawStar(ctx, Math.random() * 200, Math.random() * 200, size / 2, 5, size / 4);
                    break;
            }
        }

        // Convert canvas to base64 data URL
        const dataUrl = canvas.toDataURL('image/png');
        return dataUrl;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error generating profile picture:', error.message);
        } else {
            console.error('Unknown error generating profile picture');
        }
        return ''; // Return an empty string in case of error
    }
}

function drawTriangle(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
    ctx.beginPath();
    const x1 = x;
    const y1 = y;
    const x2 = x1 + size * Math.cos(Math.PI / 3);
    const y2 = y1 + size * Math.sin(Math.PI / 3);
    const x3 = x1 + size * Math.cos(-Math.PI / 3);
    const y3 = y1 + size * Math.sin(-Math.PI / 3);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
}

function drawPolygon(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, sides: number) {
    if (sides < 3) return;
    const angle = Math.PI * 2 / sides;
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
        const dx = x + radius * Math.cos(angle * i);
        const dy = y + radius * Math.sin(angle * i);
        if (i === 0) {
            ctx.moveTo(dx, dy);
        } else {
            ctx.lineTo(dx, dy);
        }
    }
    ctx.closePath();
    ctx.fill();
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, outerRadius: number, points: number, innerRadius: number) {
    const angle = Math.PI / points;
    ctx.beginPath();
    for (let i = 0; i < 2 * points; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const dx = x + radius * Math.cos(angle * i);
        const dy = y + radius * Math.sin(angle * i);
        if (i === 0) {
            ctx.moveTo(dx, dy);
        } else {
            ctx.lineTo(dx, dy);
        }
    }
    ctx.closePath();
    ctx.fill();
}
