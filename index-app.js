

// GET ELEMENTS FROM THE DOM
const divEl = document.querySelector('.galleryImg')
console.log(divEl)

const galleryImages = document.querySelectorAll('.galleryImg img');
console.log(galleryImages)

// ADD EVENT LISTENER AND CALL BACK FUNCTION

for(img of galleryImages){
    img.addEventListener('click', function(e){
        galleryImages.forEach(img => img.classList.toggle('radius'));
        const pEl = document.createElement("p");
        console.log(pEl)
    });
};
        
