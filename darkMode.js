let btn = document.getElementById("btn");
let head = document.getElementById("head");
let modeText = document.getElementById("mode-text");


btn.addEventListener("click", () => {
    head.classList.toggle("darkMode");
});

btn.addEventListener("click", () => {
    if (head.classList.contains("darkMode")) {
        btn.innerHTML = `<i class="fa-regular fa-moon"  id="btn"></i>`;
        modeText.innerHTML = "Dark Mode";
    } else {
        btn.innerHTML = `<i class="fa-regular fa-sun" id="btn"></i>`;
        modeText.innerHTML = "Light Mode";
    }
});