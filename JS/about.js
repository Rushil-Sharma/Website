document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        const expanded = item.classList.contains("active");
        item.setAttribute("aria-expanded", expanded);
    });
});


function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains("light")) {
        html.classList.remove("light");
        localStorage.setItem("theme", "dark");
    } else {
        html.classList.add("light");
        localStorage.setItem("theme", "light");
    }
}
window.toggleTheme = toggleTheme;

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
        document.documentElement.classList.add("light");
    } else {
        document.documentElement.classList.remove("light");
    }

    document.querySelectorAll(".item").forEach(item => {
        item.setAttribute("aria-expanded", item.classList.contains("active"));
    });
});