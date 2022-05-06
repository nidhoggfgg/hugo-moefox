let toggle_menu = document.getElementById("toggle-menu");

if (toggle_menu) {
    toggle_menu.addEventListener("click", () => {
        let menu = document.getElementById("main-menu")
        menu.classList.toggle("show")
    })
}