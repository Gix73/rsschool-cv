const burger_button = document.querySelector('.burger-menu');
const nav_ul = document.querySelector('.nav ul');
let burger_clicked = false;

burger_button.addEventListener('click', () => {
    ShowBurgerMenu();
});

nav_ul.addEventListener("click", () => {
    ShowBurgerMenu();
});

function ShowBurgerMenu(e){
    if(!burger_clicked){
        nav_ul.style.display = "flex";
        burger_clicked = true;
    }else{
        nav_ul.style.display = "none";
        burger_clicked = false;
    }
}
