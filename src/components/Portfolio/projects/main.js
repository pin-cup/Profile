// ### Projects
"use strict";

const Projects = Portfolio.querySelector(".projects");

portfolioWorksDB.forEach((project_arr) =>
  Projects.insertAdjacentHTML(
    "beforeend",
    `
    <div class="project ${project_arr.tags}">
      <div class="project__cube-wrapper">
        <div class="project__cube">
          <div class="project__cube-top">
            <p class="project__desc">${project_arr.desc}</p>

            <div class="project__links">
              ${
                project_arr.url_demo
                  ? `<a class="project__link project__link-demo" href="${project_arr.url_demo}">demo</a>`
                  : ""
              }
              ${
                project_arr.url_github
                  ? `<a a class= "project__link project__link-github" href = "${project_arr.url_github}">github</a>`
                  : ""
              }
            </div>
          </div>

          <div class="project__cube-front">
            <img class="project__img" src="${
              project_arr.url_img
                ? project_arr.url_img
                : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpaperscraft.com%2Fimage%2Fcode_codes_data_133187_3840x2160.jpg&f=1&nofb=1"
            }" alt="Picture - ${project_arr.url_img}">
          </div>
        </div>
      </div>
    </div>`
  )
);