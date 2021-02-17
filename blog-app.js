
// SELECT ELEMENTS FROM THE DOM


const nameInput = document.querySelector('#userName');


const emailInput = document.querySelectorAll('#userEmail');


const commentTextarea = document.querySelector('#commentBox');


const commentPEl = document.querySelector('.commentContainer:last-child p:last-child');


const dateName = document.querySelector('.commentContainer:last-child .dateName');

const form = document.querySelector('.blogForm');

// CREATE EVENT LISTENER TO POST COMMENT TO PAGE

form.addEventListener('submit', function(event){
    event.preventDefault();

    // adding name and date to page
    const name = nameInput.value;
    const currentDate = new Date();
    dateName.textContent = `${currentDate} by ${name}`

    // adding photo to page
     const profilePicture = document.createElement('img');
     console.log(profilePicture)
     profilePicture.src = "assets/comment-1.jpg";
     profilePicture.alt = 'profile picture of user';
     
     document.querySelector('.commentContainer:last-child .commentImg').appendChild(profilePicture)


     // adding comment to page
     const comment = commentTextarea.value;
     commentPEl.appendChild(document.createTextNode(comment))

    //  clearing inputs on the page

     nameInput.value = ""
     commentTextarea.value = ""
     emailInput.value = ""

 });

//  END OF EVENT LISTENER
    

    
    












