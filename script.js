const profile = document.getElementById("profile");
const reveals = document.querySelectorAll(".reveal");
const glow = document.querySelector(".cursor-glow");

/* Profile animation */
window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
profile.classList.add("small");
} else {
profile.classList.remove("small");
}

/* Scroll reveal */
reveals.forEach(reveal => {
const windowHeight = window.innerHeight;
const revealTop = reveal.getBoundingClientRect().top;
if (revealTop < windowHeight - 100) {
reveal.classList.add("active");
}
});
});

/* Mouse glow */
document.addEventListener("mousemove", (e) => {
glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";
});

/* PARTICLES CONFIG */
particlesJS("particles-js", {
particles: {
number: { value: 80 },
size: { value: 3 },
color: { value: "#00f2fe" },
line_linked: {
enable: true,
distance: 150,
color: "#00f2fe",
opacity: 0.3,
width: 1
},
move: {
enable: true,
speed: 2
}
},
interactivity: {
events: {
onhover: { enable: true, mode: "repulse" }
},
modes: {
repulse: { distance: 100 }
}
},
retina_detect: true
});
