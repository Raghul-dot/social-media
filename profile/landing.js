 // <!-- show menu -->
//   for toggle right side button and show toggle items 
 const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav_toggle', 'nav_menu')
// active and remove active show iems in toggle
const navLink= document.querySelectorAll('.nav_link');
navLink.forEach(n=> n.classList.remove('active'))
function linkAction()
{
navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')
    const navMenu =document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))