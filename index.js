// JS For Sidebar

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('active'); // Add 'active' class to show the sidebar
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('active'); // Remove 'active' class to hide the sidebar
}


// JS for Skills
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
