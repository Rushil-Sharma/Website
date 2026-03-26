document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("msg").value.trim();

    if (!name || !email || !msg) {
        window.alert("INVALID, please fill all fields !");
        return;
    }

    window.alert("Sent . . .");
    document.getElementById("form").reset();
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
});