AOS.init();

const skills = [
  {
    name: "html",
    image: "/images/html-icon.jpg",
  },
  {
    name: "css",
    image: "/images/css-icon.png",
  },
  {
    name: "javascript",
    image: "/images/javascript-icon.png",
  },
  {
    name: "bootstrap",
    image: "/images/bootstrap-icon.png",
  },
  {
    name: "react",
    image: "/images/react-icon.png",
  },
  {
    name: "nodejs",
    image: "/images/nodejs-icon.png",
  },
  {
    name: "php",
    image: "/images/php-icon.png",
  },
  {
    name: "mysql",
    image: "/images/mysql-icon.png",
  },
  {
    name: "postgresql",
    image: "/images/postgresql-icon.png",
  },
];

const projects = [
  {
    title: "Scholar Gate",
    description:
      "Scholar Gate is a web-based scholarship registration application. This application functions well in terms of both front-end and back-end, implementing the CRUD concept.",
    image: "/images/project-scholargate.png",
    tools: ["Bootstrap", "JavaScript", "PHP", "MySQL"],
    websiteLink: "",
    githubLink: "",
  },
  {
    title: "Admin Dashboard (Scholar Gate)",
    description:
      "This is an admin application used to manage data in the Scholar Gate application. This admin dashboard is capable of performing CRUD operations on data effectively.",
    image: "/images/projects-admindashboard-scholargate.png",
    tools: ["Bootstrap", "JavaScript", "PHP", "MySQL"],
    websiteLink: "",
    githubLink: "",
  },
];

const localStorageKey = "MODE";

if (typeof Storage !== "undefined") {
  if (localStorage.getItem(localStorageKey) === null) {
    localStorage.setItem(localStorageKey, "light");
  }
}

$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    $(".navbar").addClass("nav-shadow");
  } else {
    $(".navbar").removeClass("nav-shadow");
  }

  if ($(document).scrollTop() >= 0 && $(document).scrollTop() <= 600) {
    $("#home-link").addClass("nav-active");
  } else {
    $("#home-link").removeClass("nav-active");
  }

  if ($(document).scrollTop() > 600 && $(document).scrollTop() <= 850) {
    $("#about-link").addClass("nav-active");
  } else {
    $("#about-link").removeClass("nav-active");
  }

  if ($(document).scrollTop() > 850 && $(document).scrollTop() <= 1200) {
    $("#skills-link").addClass("nav-active");
  } else {
    $("#skills-link").removeClass("nav-active");
  }

  if ($(document).scrollTop() > 1200 && $(document).scrollTop() <= 2000) {
    $("#projects-link").addClass("nav-active");
  } else {
    $("#projects-link").removeClass("nav-active");
  }

  if ($(document).scrollTop() > 2000) {
    $("#contact-link").addClass("nav-active");
  } else {
    $("#contact-link").removeClass("nav-active");
  }
});

const darkModeButton = $(".dark-mode");
const lightModeButton = $(".light-mode");

if (localStorage.getItem(localStorageKey) === "light") {
  darkModeButton.removeClass("hidden");
  lightModeButton.addClass("hidden");

  $("body").removeClass("dark-background");
  $("body").removeClass("text-grey");
  $("nav").removeClass("dark-background");
  $("nav").addClass("bg-white");
  $(".btn-outline-main").removeClass("text-grey");
  $("#hero-image-container").html(
    `<img src="/images/hero-image.png" alt="image" class="hero-image" />`
  );
  $("#about-image-container").html(
    `<img src="/images/about-image.png" alt="image" class="about-image" />`
  );
  $(".anchor-link").removeClass("color-link-light");
  $(".anchor-link").addClass("color-link-dark");
  $(".nav-link").removeClass("nav-link-color");
  $(".form-control").css("color", "#212529");
} else {
  lightModeButton.removeClass("hidden");
  darkModeButton.addClass("hidden");

  $("body").addClass("dark-background");
  $("body").addClass("text-grey");
  $("nav").removeClass("bg-white");
  $("nav").addClass("dark-background");
  $(".btn-outline-main").addClass("text-grey");
  $("#hero-image-container").html(
    `<img src="/images/hero-image-dark.png" alt="image" class="hero-image" />`
  );
  $("#about-image-container").html(
    `<img src="/images/about-image-dark.png" alt="image" class="about-image" />`
  );
  $(".anchor-link").removeClass("color-link-dark");
  $(".anchor-link").addClass("color-link-light");
  $(".nav-link").addClass("nav-link-color");
  $(".form-control").css("color", "whitesmoke");
}

darkModeButton.click(function () {
  darkModeButton.addClass("hidden");
  lightModeButton.removeClass("hidden");
  localStorage.setItem(localStorageKey, "dark");

  $("body").addClass("dark-background");
  $("body").addClass("text-grey");
  $("nav").removeClass("bg-white");
  $("nav").addClass("dark-background");
  $(".btn-outline-main").addClass("text-grey");
  $("#hero-image-container").html(
    `<img src="/images/hero-image-dark.png" alt="image" class="hero-image" />`
  );
  $("#about-image-container").html(
    `<img src="/images/about-image-dark.png" alt="image" class="about-image" />`
  );
  $(".anchor-link").removeClass("color-link-dark");
  $(".anchor-link").addClass("color-link-light");
  $(".nav-link").addClass("nav-link-color");
  $(".project-card").removeClass("shadow");
  $(".project-card").addClass("bg-card-dark");
  $(".form-control").css("color", "whitesmoke");
  $(".skill-icon-container").addClass("bg-card-dark");
});
lightModeButton.click(function () {
  darkModeButton.removeClass("hidden");
  lightModeButton.addClass("hidden");
  localStorage.setItem(localStorageKey, "light");

  $("body").removeClass("dark-background");
  $("body").removeClass("text-grey");
  $("nav").removeClass("dark-background");
  $("nav").addClass("bg-white");
  $(".btn-outline-main").removeClass("text-grey");
  $("#hero-image-container").html(
    `<img src="/images/hero-image.png" alt="image" class="hero-image" />`
  );
  $("#about-image-container").html(
    `<img src="/images/about-image.png" alt="image" class="about-image" />`
  );
  $(".anchor-link").removeClass("color-link-light");
  $(".anchor-link").addClass("color-link-dark");
  $(".nav-link").removeClass("nav-link-color");
  $(".project-card").removeClass("bg-card-dark");
  $(".project-card").addClass("shadow");
  $(".form-control").css("color", "#212529");
  $(".skill-icon-container").removeClass("bg-card-dark");
});

const makeSkillIcon = (skillObject) => {
  let skillIcon = "";
  if (localStorage.getItem(localStorageKey) === "light") {
    skillIcon = `
      <div class="skill-icon-container" data-aos="fade-up"><img src="${skillObject.image}" alt="icon" class="skill-icon"/></div>
    `;
  } else {
    skillIcon = `
      <div class="skill-icon-container bg-card-dark" data-aos="fade-up"><img src="${skillObject.image}" alt="icon" class="skill-icon"/></div>
    `;
  }

  return skillIcon;
};

const makeProject = (projectObject) => {
  const toolsString = projectObject.tools.join(", ");
  let projectBody = "";
  if (localStorage.getItem(localStorageKey) === "light") {
    projectBody = `
  <div class="row shadow p-3 rounded mb-5 project-card" data-aos="zoom-in-up">
    <div class="col-md-6 my-3 project-image-container">
      <img src="${projectObject.image}" alt="image">
    </div>
    <div class="col-md-6">
      <h5 class="heading">${projectObject.title}</h5>
      <p class="project-description">${projectObject.description}</p>
      <p>${toolsString}</p>
      <a href="" class="me-3 anchor-link color-link-dark">Code <i class="fa-brands fa-github"></i></a>
      <a href="" class="me-3 anchor-link color-link-dark">Live Demo <i class="fa-solid fa-arrow-right-from-bracket"></i></a>
    </div>
  </div>
  `;
  } else {
    projectBody = `
  <div class="row bg-card-dark p-3 rounded mb-5 project-card" data-aos="zoom-in-up">
    <div class="col-md-6 my-3 project-image-container">
      <img src="${projectObject.image}" alt="image">
    </div>
    <div class="col-md-6">
      <h5 class="heading">${projectObject.title}</h5>
      <p class="project-description">${projectObject.description}</p>
      <p>${toolsString}</p>
      <a href="" class="me-3 anchor-link color-link-light">Code <i class="fa-brands fa-github"></i></a>
      <a href="" class="me-3 anchor-link color-link-light">Live Demo <i class="fa-solid fa-arrow-right-from-bracket"></i></a>
    </div>
  </div>
  `;
  }
  return projectBody;
};

skills.forEach((skill) => {
  const skillsContainer = $("#skillsContainer");
  skillsContainer.append(makeSkillIcon(skill));
});

projects.forEach((project) => {
  const projectsContainer = $("#projectsContainer");
  projectsContainer.append(makeProject(project));
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
