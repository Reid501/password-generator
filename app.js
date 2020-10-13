const button = document.querySelector('.button');
const password = document.querySelector('.password');

passwordCharacters = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '£', '$', '&'];

button.addEventListener('click', () => {
    let passwordHolder = '';

    for (let i = 0; i < 9; i++){
        randomNumber = Math.floor(Math.random() * 39);
        passwordHolder += passwordCharacters[randomNumber];
    }

    password.innerHTML = passwordHolder;
})