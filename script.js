// ===========================
// DevSecOps Project Website
// script.js
// ===========================


// Navbar Shadow Effect

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.boxShadow = "none";
    }
});


// ===========================
// Reveal Animation
// ===========================

const revealElements =
document.querySelectorAll(
    ".card, .stat-box, .about, .workflow, .features"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const elementTop =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===========================
// Animated Counters
// ===========================

const counters =
document.querySelectorAll(".stat-box h3");

let started = false;

function runCounters() {

    if (started) return;

    const statsSection =
    document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop =
    statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counters.forEach(counter => {

            const text =
            counter.innerText;

            const target =
            parseInt(text);

            if (isNaN(target)) return;

            let count = 0;

            const increment =
            target / 50;

            const updateCounter = () => {

                if (count < target) {

                    count += increment;

                    counter.innerText =
                    Math.ceil(count);

                    setTimeout(
                        updateCounter,
                        30
                    );

                } else {

                    counter.innerText =
                    target +
                    (text.includes("%")
                    ? "%"
                    : "+");
                }

            };

            updateCounter();

        });

        started = true;
    }

}

window.addEventListener(
    "scroll",
    runCounters
);

runCounters();


// ===========================
// Active Navigation
// ===========================

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(nav =>
            nav.classList.remove("active")
        );

        link.classList.add("active");

    });

});


// ===========================
// Floating Hero Effect
// ===========================

const hero =
document.querySelector(".hero-content");

window.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x =
    (window.innerWidth / 2 - e.pageX) / 50;

    const y =
    (window.innerHeight / 2 - e.pageY) / 50;

    hero.style.transform =
    `translate(${x}px, ${y}px)`;

});


// ===========================
// Scroll Progress Bar
// ===========================

const progressBar =
document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";
progressBar.style.background =
"#38bdf8";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + "%";

});


// ===========================
// Console Welcome Message
// ===========================

console.log(
`
=========================================
 DevSecOps CI/CD Project
=========================================

GitHub
Jenkins
SonarQube
Trivy
Docker
Docker Hub
Kubernetes
Prometheus
Grafana

Fully Automated DevSecOps Pipeline
=========================================
`
);
