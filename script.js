const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// Default to light
if (!document.body.classList.contains("dark")) {
  document.body.classList.add("light");
}
