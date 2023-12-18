let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector(".navbar");

 menu.onclick = () => {
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
 }



window.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active")
    } else {
        document.querySelector(".header").classList.remove("active")

    }
   

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// حتي بما اعمل ريفريش يفضل با الوضع اللي سبته عليه
window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active")
    } else {
        document.querySelector(".header").classList.remove("active")

    }

    // fadeOut()

}

// function loader() {
//     document.querySelector(".loading").classList.add("active");
// }
// function fadeOut() {
//     setTimeout(loader, 2000);
// }



// document.querySelector('#login-btn').onclick = () => {
//     document.querySelector('.login-form-container').classList.toggle('active');
// }

// document.querySelector('#close-login-form').onclick = () => {
//     document.querySelector('.login-form-container').classList.remove('active');
// }
// 
