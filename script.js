document.body.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  document.querySelector(".pic img").src = e.target.dataset.src;

  document
    .querySelectorAll("button")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
});

var details = document.querySelectorAll("details");
for (i = 0; i < details.length; i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
  var details = event.target.parentNode.children;
  for (i = 0; i < details.length; i++) {
    if (
      details[i].tagName != "DETAILS" ||
      !details[i].hasAttribute("open") ||
      event.target == details[i]
    ) {
      continue;
    }
    details[i].removeAttribute("open");
  }
}
