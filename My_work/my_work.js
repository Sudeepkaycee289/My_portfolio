// Js for Light / Dark Mode
const toggleButton = document.getElementById("toggleTheme");
const body = document.body;

// Set initial state of the toggle button
toggleButton.textContent = body.classList.contains('dark-mode') ? '☾' : '☀︎';

toggleButton.addEventListener("click", () => {
    // Toggle light mode class on the body
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    // Change button icon based on the theme
    if (body.classList.contains("light-mode")) {
        toggleButton.textContent = "☽︎"; // Moon icon for dark mode
    } else {
        toggleButton.textContent = "☀︎"; // Sun icon for light mode
    }
});

// JS For Sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active'); // Add 'active' class to show the sidebar
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active'); // Remove 'active' class to hide the sidebar
}

// Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('.menu_btn');
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        hideSidebar();
    }
});
