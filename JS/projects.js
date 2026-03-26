function openModal(id) {
    document.getElementById("modal-" + id).classList.add("show")
}

function closeModal(id) {
    document.getElementById("modal-" + id).classList.remove("show")
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme")
    const next = current === "light" ? "dark" : "light"
    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem("theme", next)
}

window.toggleTheme = toggleTheme

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("theme") || "dark"
    document.documentElement.setAttribute("data-theme", saved)
})

window.filterProjects = () => { }