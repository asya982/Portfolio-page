"use strict";

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < projects.length; i++) {
    document.getElementsByClassName("project-grid")[0].insertAdjacentHTML(
      "beforeend",
      `<a href="${projects[i].url}" class="project" target="_blank" id=project-${i}>
            <img src="${projects[i].img}" alt="${projects[i].title}">
            <p class="project-title">
                <span class="code"><</span>
                    ${projects[i].title}
                <span class="code">/></span>
            </p>
        </a>`
    );
  }

  ScrollReveal().reveal(".section");
});
