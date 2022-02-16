const messages = [
    "David",
    "Diana",
    "Ana Maria",
    "Isabela",
    "Antonio",
    "Norma",
    "Ernesto",
    "Paolo",
    "Ana Paula"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };