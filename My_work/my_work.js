function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active'); // Add 'active' class to show the sidebar
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active'); // Remove 'active' class to hide the sidebar
}
