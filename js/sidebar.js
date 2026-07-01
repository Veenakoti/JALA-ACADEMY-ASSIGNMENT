const buttons = document.querySelectorAll(".menu-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Close all submenus
    document.querySelectorAll(".submenu").forEach(sub => sub.style.display = "none");

    // Open only the clicked one
    const submenu = btn.nextElementSibling;
    submenu.style.display = "block";
  });
});
