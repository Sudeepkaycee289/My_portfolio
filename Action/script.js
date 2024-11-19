// script.js

const skills = [
    { name: "UX Research", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/figma.svg" },
    { name: "UI/Interaction Design", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/sketch.svg" },
    { name: "Agile Development", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/jira.svg" },
    { name: "Wireframing", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobexd.svg" },
    { name: "Prototyping", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/invision.svg" },
    { name: "Data Analysis", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/tableau.svg" },
    { name: "Print", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobeindesign.svg" },
    { name: "Illustrations", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobeillustrator.svg" },
    { name: "Presentation", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftpowerpoint.svg" },
    { name: "Documenting", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftword.svg" },
    { name: "Communication", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/slack.svg" },
    { name: "Time Management", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/notion.svg" },
    { name: "Adaptability", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/trello.svg" },
];

const globeContainer = document.getElementById('globe');
const tooltip = document.getElementById('tooltip');
const canvas = document.getElementById('connection-lines');
const ctx = canvas.getContext('2d');
const radius = 250;

// Set up canvas
canvas.width = globeContainer.offsetWidth;
canvas.height = globeContainer.offsetHeight;

// Place icons on a sphere
skills.forEach((skill, index) => {
    const phi = Math.acos(-1 + (2 * index) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    const iconElement = document.createElement('div');
    iconElement.className = 'icon';
    iconElement.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;

    const img = document.createElement('img');
    img.src = skill.icon;
    img.alt = skill.name;

    iconElement.addEventListener('mouseover', () => {
        tooltip.textContent = skill.name;
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    iconElement.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });

    iconElement.appendChild(img);
    globeContainer.appendChild(iconElement);
});

// Draw connection lines
function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.5;

    const elements = Array.from(document.getElementsByClassName('icon'));
    elements.forEach((element, index) => {
        const rect1 = element.getBoundingClientRect();
        const x1 = rect1.x + rect1.width / 2 - globeContainer.offsetLeft;
        const y1 = rect1.y + rect1.height / 2 - globeContainer.offsetTop;

        elements.forEach((otherElement, otherIndex) => {
            if (index !== otherIndex) {
                const rect2 = otherElement.getBoundingClientRect();
                const x2 = rect2.x + rect2.width / 2 - globeContainer.offsetLeft;
                const y2 = rect2.y + rect2.height / 2 - globeContainer.offsetTop;

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
        });
    });
}

// Continuously draw and rotate
function animate() {
    drawLines();
    requestAnimationFrame(animate);
}

animate();
