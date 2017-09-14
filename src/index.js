import _ from 'lodash';
import './style.css';
import logo from './Moodyslogo.png';
import printMe from './print.js';


function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ', ');
    element.classList.add('hello');

    const myLogo = new Image();
    myLogo.src = logo;
    element.appendChild(myLogo);

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

var element = component();
document.body.appendChild(element);

if(module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');      
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}