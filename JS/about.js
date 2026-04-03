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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, {
    threshold: 0
});

document.querySelectorAll(".content").forEach((el, index) => {
    observer.observe(el);
});

const timeline = document.getElementById("timeline");

timeline.addEventListener("click", (e) => {
    const item = e.target.closest(".item");
    if (!item) return;

    const isOpen = item.classList.toggle("active");
    item.setAttribute("aria-expanded", isOpen);
});