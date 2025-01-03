/*!
 * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

window.addEventListener("load", function () {
  var status = document.getElementById("status");
  var preloader = document.getElementById("preloader");
  var footer = document.getElementsByTagName("footer")[0];
  var main = document.getElementsByTagName("main")[0];
  var body = document.body;

  setTimeout(function () {
    status.remove();
    preloader.remove();
    body.style.overflow = "visible";
    main.classList.remove("start");
    footer.classList.remove("start");

    setTimeout(function () {
      main.classList.add("transition");
      footer.classList.add("transition");
    }, 100);
  }, 150);

  const baseYear = 2017;
  const yearDifference = new Date().getFullYear() - baseYear;
  document.getElementById(
    "experience"
  ).textContent = `${yearDifference} years of experience`;
});
