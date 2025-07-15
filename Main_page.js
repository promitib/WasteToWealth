let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = Math.min(value * 2.5, text.height) + 'px';
    leaf.style.top = Math.min(value * -1.5, leaf.height) + 'px';
    leaf.style.left = Math.min(value * 1.5, leaf.height)+ 'px';
    hill5.style.left = Math.min(value * 1.5, hill5.height) + 'px';
    hill4.style.left = Math.min(value * -1.5, hill4.height) + 'px';
    hill1.style.top = Math.min(value * 1.5, hill1.height) + 'px';
})

function LogOut(){
    window.location = "Login.html"
    localStorage.removeItem("user2name");
}

function onload(){
    user1name = localStorage.getItem("user2name");
    console.log(user1name);
    document.getElementById("text").innerHTML = "Welcome "+ user1name;
}

window.addEventListener("load", () => {
    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  });
  