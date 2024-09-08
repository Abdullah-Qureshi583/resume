var hamburger = document.querySelector(".hamburger");
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener("click", function () {
    var r = document.querySelectorAll(".navUl");
    r.classList.add("displayUl");
    console.log(r);
    console.log("clicked!");
});
