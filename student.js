



const opensidebar = document.getElementById("sidebar1");
const closeSidebar = document.getElementById("sidebar2");
const sidebar = document.getElementById("sideBar");

opensidebar.addEventListener("click", function(){
    sidebar.style.display = "block";
});
closeSidebar.addEventListener("click", function(){
    sidebar.style.display = "none";
});

function displayDate() {
  const now = new Date();
  const dateString = now.toDateString();
  document.getElementById("date").textContent = dateString;
}

window.onload = displayDate;