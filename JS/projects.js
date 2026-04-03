function goToHome() {
    window.location.href = "index.html";
}

function goToAbout() {
    window.location.href = "about.html";
}

function goToProjects() {
    window.location.href = "projects.html";
}

function goToContact() {
    window.location.href = "contact.html";
}

function openProject(url) {
    if (url == 1) window.open("https://github.com/Rushil1310/TicTacToe");
    if (url == 2) window.open("https://github.com/Rushil1310/Memory-Game");
    if (url == 3) window.open("https://github.com/Rushil1310/Twixt-Game");
    if (url == 4) window.open("https://github.com/Rushil1310/foodhub");
}

function openModal(id) {
    document.getElementById("modal-" + id).classList.add("active");
}

function closeModal(id) {
    document.getElementById("modal-" + id).classList.remove("active");
}

function copy(mail) {
    if (mail == 'Outlook') {
        navigator.clipboard.writeText('rushil.sharma@research.iiit.ac.in');
        alert("Copied the Outlook mail id");
    }
    else {
        navigator.clipboard.writeText('itzrushilsharma@gmail.com');
        alert("Copied the Google mail id");
    }
}

const toggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    toggle.checked = true;
}

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
    }
});

const selectedTags = new Set();
const filterButtons = document.querySelectorAll(".filter-btn");

function reset(){
    filterButtons.forEach(btn =>{
        btn.classList.remove("active");
    })
    selectedTags.clear();
    filterProjects();
    updateURL();
}

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tag = btn.dataset.tag;

        if (selectedTags.has(tag)) {
            selectedTags.delete(tag);
            btn.classList.remove("active");
        } else {
            selectedTags.add(tag);
            btn.classList.add("active");
        }

        filterProjects();
        updateURL();
    });
});

function filterProjects() {
    const projects = document.querySelectorAll(".project-btn");

    projects.forEach(project => {
        const projectTags = project.dataset.tags.split(" ");

        const matches = [...selectedTags].every(tag =>
            projectTags.includes(tag)
        );

        if (selectedTags.size === 0 || matches) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

function updateURL() {
    let tags = Array.from(selectedTags).join(",");

    if (tags) {
        history.pushState(null, "", "?tags=" + tags);
    } else {
        history.pushState(null, "", window.location.pathname);
    }
}

function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const tags = params.get("tags");

    if (!tags) return;

    tags.split(",").forEach(tag => {
        selectedTags.add(tag);

        document.querySelector(`[data-tag="${tag}"]`)?.classList.add("active");
    });

    filterProjects();
}

loadFromURL();