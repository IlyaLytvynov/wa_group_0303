import './index.scss';
const name = prompt('Enter name: ', '');
const secretName = 'admin';

if (name === secretName) {
    const password = prompt('Enter admin\'s password');
    if(password === '123') {
        console.log('Logged in');
    } else {
        console.log('Password is wrong!');
    }
} else {
    console.log('Good buy');
}
