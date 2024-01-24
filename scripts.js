"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const tooltip = document.querySelector(".tooltip");

  const emailBtn = document.getElementById("email");
  emailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("bagin.nst@gmail.com");
    console.log(tooltip);
    tooltip.innerText = "Email was copied!";
  });

  for (let i = 0; i < projects.length; i++) {
    document.getElementsByClassName("project-grid")[0].insertAdjacentHTML(
      "beforeend",
      `
        <div class="project">
          <div class="project-description">
            <h4 class="project-title">
              ${projects[i].title}
            </h4>
            <p class="project-description side-text">
              ${projects[i].description}
            </p>
            <a href="${projects[i].url}" class="btn btn-outlined view-all" target="_blank" id=project-${i}>
              <span class="code"><</span>
                View project
              <span class="code">/></span>
            </a>
          </div>
          <img src="${projects[i].img}" alt="${projects[i].title}">
        </div>
        `
    );
  }

  ScrollReveal().reveal(".section");
});
