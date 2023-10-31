const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
const mainDoc = document.getElementById('main-doc');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active'); 
});

mainDoc.addEventListener('click', ()=>{
    navbarLinks.classList.remove('active');
});