function goToHome() {
    window.location.href = "home.html";
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