let btn = document.getElementById("btn");
let head = document.getElementById("head");


btn.addEventListener("click", () => {
    head.classList.toggle("darkMode");
});

btn.addEventListener("click", () => {
    if (head.classList.contains("darkMode")) {
        btn.innerHTML = `<i class="fa-regular fa-moon"  id="btn"></i>`;
    } else {
        btn.innerHTML = `<i class="fa-regular fa-sun" id="btn"></i>`;
    }
});