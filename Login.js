const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>
{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>
{
    wrapper.classList.remove('active');
});

function addUser() {
    user_name = document.getElementById("user1name").value;
    localStorage.setItem("user2name", user_name);
}

function addUser1() {
    user_name = document.getElementById("username").value;
    localStorage.setItem("user2name", user_name);
}
