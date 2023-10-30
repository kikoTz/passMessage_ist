// variables
const message = document.querySelector('.message');
const text = document.getElementById('text');
const send = document.getElementById('send');
const clear = document.getElementById('clear');

//click event
function deliverMessage(){
    let textValue = text.value;
    message.innerHTML = textValue;
}
send.addEventListener('click', deliverMessage);

//second click event
function clearField(){
 message.innerHTNL = '';
 text.value = '';
}
clear.addEventListener('click', clearField);