document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".progress-circle").forEach((circle) => {
    let progress = circle.getAttribute("data-progress");
    let span = document.createElement("span");
    circle.appendChild(span);
    let rotation = (progress / 100) * 360;
    span.style.transform = `rotate(${rotation}deg)`;
  });
});
