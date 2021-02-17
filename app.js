// CONTACT FORM JS ADDING MESSAGE ONCE USER HAS SUBMITTED FORM.

// CALLING VARIABLE AND GETTING ELEMENTS FROM THE DOM

const submitButton = document.querySelector('#submit');

const formEl = document.querySelector('form');

const inputName = document.querySelector('input[type="text"]');
console.log(inputName);

const inputEmail = document.querySelector('input[type="email"]')
console.log(inputEmail);
const textareaEL = document.querySelector('#commentBox');



// CREATING EVENT LISTENER CALL BACK FUNCTION

formEl.addEventListener('submit',function(event){
    event.preventDefault();

    // CREATING NEW ELEMENT

    const pEl = document.createElement('p')

    const name = inputName.value;

    
    pEl.innerHTML = `<p>Thank you ${name}! We will be in touch</p>`;
   
    
    // CHOOSE ELEMENT FROM HTML AND ADD LATEST ELEMENT
    const divEl = document.querySelector('.messageJS');

    
    divEl.appendChild(document.createTextNode(pEl.innerText));

    // ADDING STYLE TO THE HTML

    divEl.style.background = '#86E0F9';
    divEl.style.color= '#0C1423';
    divEl.style.marginBottom= '2%';
    divEl.style.padding='2rem';

    // CLEAR INPUT BOXES ONCE SUBMITTED


    inputName.placeholder = ' ';
    inputEmail.value = ' ';
    textareaEL.value = ' ';
    
    // can I save all of these into one variable?  I tried to select input user and input email together but it wouldn't clear them?  I selected them by choosing the "required" attribute they shared. Why is there a red box on email input when it clears?

});
















